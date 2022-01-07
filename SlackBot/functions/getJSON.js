const getDetailsJSON = async (payer, payee, res, app, command) => {
    //Fetching all users
    const result = await app.client.users.list();
    const payeeId = result.members.find(user => user.name == payee.slice(1)).id;

    // Call the users.info method using the WebClient
    const payerRes = await app.client.users.info({
        user: command.user_id
    });
    const payeeRes = await app.client.users.info({
        user: payeeId
    });

    console.log(payerRes.user.profile.image_192);
    console.log(payeeRes.user.profile.image_192);

    return {
        payment_id: res.id,
        from: payer,
        to: payee.substring(1),
        amount: res.amount/100,
        currency: res.currency,
        payment_status: res.status,
        reference_id: res.reference_id,
        payment_link: res.short_url,
        from_avatar: payerRes.user.profile.image_192,
        to_avatar: payeeRes.user.profile.image_192,
        platform: "slack",
    }
}

module.exports = { getDetailsJSON };