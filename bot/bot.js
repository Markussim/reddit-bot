const { Client, Intents } = require("discord.js");

const token = process.env.DISCORD_BOT_TOKEN;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Run on ready
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Login
client.login(token);