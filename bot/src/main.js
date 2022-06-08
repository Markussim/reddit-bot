// External dependencies:
const { Client, Intents } = require("discord.js");
const { getTopOfDay } = require("./services/reddit");
const cron = require("node-cron");
const dotev = require("dotenv").config();

// Internal dependencies:
const { sendMessage } = require("./lib.js");

// Constants:
const token = process.env.DISCORD_BOT_TOKEN;
const subreddit = process.env.DISCORD_BOT_SUBREDDIT;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Run on ready
client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  sendMessage(client, await getTopOfDay(subreddit), subreddit);

  cron.schedule("0 * * * *", async () => {
    sendMessage(client, await getTopOfDay(subreddit), subreddit);
  });
});

// Login
client.login(token);
