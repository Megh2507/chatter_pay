require('dotenv').config()
const { App } = require("@slack/bolt");
const Razorpay = require("razorpay");
const randomize = require('randomatic');
const axios = require('axios');
const TinyURL = require('tinyurl');
const { getDetailsJSON } = require('./functions/getJSON');


const app = new App({
    token: process.env.TOKEN, //Find in the Oauth  & Permissions tab
    signingSecret: process.env.SIGNING_SECRET, // Find in Basic Information Tab
    appToken: process.env.APP_TOKEN, // Token from the App-level Token that we created
    socketMode: true,
});

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});

app.command("/pay", async ({ command, ack, respond }) => {
    await ack();
    // console.log(command);
    let payer = command.user_name;
    let payee = command.text.split(" ")[0];
    let amount = command.text.split(" ")[1];

    await respond({
        text: `You have initiated a payment of Rs ${amount} to <${payee}>`,
        link_names: true,
    });

    const id = randomize('A0', 5);
    const options = {
        amount: amount * 100,
        currency: 'INR',
        description: '',
        reference_id: id,
        options: {
            checkout: {
                name: "Chatterpay"
            }
        }
    };

    await instance.paymentLink.create(options, async (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        //wait for 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));
        //send personal dm to payee
        await app.client.chat.postMessage({
            token: process.env.TOKEN,
            channel: payee,
            text: `You will receive a payment of Rs ${amount} from <@${payer}>`,
            link_names: true,
        })
        //send payment link to payer
        await respond({
            text: `Payment link: ${res.short_url}`,
            link_names: true,
        });
        //wait for 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));


        // Uploading payment details to DB
        await getDetailsJSON(command.user_name, command.text.split(" ")[0], res, app, command).then((paymentDetails) => {
            console.log(paymentDetails);
            try {
                axios.post("http://localhost:5000/upload", paymentDetails).then((res) => {
                    console.log(res.data);
                });
            } catch (error) {
                console.log(error.err);
            }
        });

        // wait for 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));
        // send payment link to payee
        const url = await TinyURL.shorten(`https://anomic30.github.io/Custom-payout-page/?id=${id}`);
        await app.client.chat.postMessage({
            token: process.env.TOKEN,
            channel: payee,
            text: `Your payout link: ${url}`,
            link_names: true,
        });
        console.log("Payment cycle completed!");
    });

});

app.start(3001).then(() => {
    console.log("Slack bot started!");
})