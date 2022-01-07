import Discord from "discord.js";
import * as dotenv from "dotenv";
import { pay } from "./functions/pay.js";
import { hist } from "./functions/hist.js";
import { initializeCommands } from "./commands.js";

dotenv.config();

const TOKEN = process.env.TOKEN;

const client = new Discord.Client({
  intents: ["GUILDS", "DIRECT_MESSAGES", "GUILD_MESSAGES"],
  partials: ["MESSAGE", "CHANNEL"],
});

client.on("ready", () => {
  console.log(`Ready! Logged in as ${client.user.tag}\n`);

  const GUILD_ID = ""; //Currently using my own server ID for testing
  const guild = client.guilds.cache.get(GUILD_ID);
  let commands;

  if (guild) {
    commands = guild.commands;
  } else {
    commands = client.application.commands;
  }

  //Function to initialize all the slash commands
  initializeCommands(commands, Discord);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName, options } = interaction;
  if (commandName === "pay") {
    await pay(interaction, options);
  } else if (commandName === "hist") {
    await hist(interaction);
  }
});

client.login(TOKEN);
