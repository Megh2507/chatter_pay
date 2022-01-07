<p align="center">
   <br/>
   <a href="https://chatterpay-discord-bot.vercel.app/" target="_blank"><img width="150px" src="./images/chatterpay.png" /></a>
   <h3 align="center">Chatterpay</h3>
   <p align="center">Next generation payment bot!</p>
</p>

<div align="center">

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

</div>


# Chatterpay

A simple bot that automates the process of p2p payments using Razorpay APIs. Chatterpay is the only bot you need to automate your payments in your Discord / Slack community.

 ## Checkout our website to learn more!
[chatterpay-discord-bot.vercel.app](https://chatterpay-discord-bot.vercel.app/)
</hr>
<img src="./images/website.png" width="100%">

## Workflow of the Discord bot
<img src="./images/discord-bot-workflow.png" width="100%">

## Workflow of the Slack bot
<img src="./images/slack-bot-workflow.png" width="100%">

## Chatterpay Dashboard
<img src="./images/dashboard.png" width="100%">

## Getting started

First, make sure you have all these installed on your local machine & then continue.

* Node.js v16.13.1^
* NPM v8.1.0^

### Installation

```bash
# Clone the repository
git clone https://github.com/anomic30/Chatterpay-discord-bot.git
# Enter into the directory
cd chatterpay-discord-bot/
# Enter into dashboard
cd Dashboard
npm install
# Enter into Discord bot
cd DiscordBot
npm install
# Enter into Slack bot
cd SlackBot
npm install
# Enter into Chatterpay Database
cd Chatterpay DB
npm install
```
### ⚠️ Important!
In order to use this for your own purpose, check the .env.example in each of the directories.

### Starting the application

```bash
# To start the dashboard in development mode
npm run dev
# To start the discord bot in development mode
npm run dev
# To start the slack bot in development mode
npm run dev
# To start the chatterpay server in development mode
npm run dev
```

## Bot Features & Commands

* 💸 Pay a Discord user / Slack user

`/pay user_name amount`

<br />
<img src="./images/command.png" width="300px">

