const { Client, Intents } = require("discord.js");
const { getTopOfDay } = require("./services/reddit");
const cron = require("node-cron");
const { sendMessage } = require("./lib.js");

const token = process.env.DISCORD_BOT_TOKEN;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Run on ready
client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  sendMessage(client, await getTopOfDay());

  cron.schedule("0 * * * *", async () => {
    sendMessage(client, await getTopOfDay());
  });
});

// Login
client.login(token);
