// External dependencies:
const { MessageEmbed } = require("discord.js");
const axios = require("axios");

// Constants:
const channelId = process.env.DISCORD_BOT_CHANNEL;

async function sendMessage(client, post, subreddit) {
  if (!post) {
    throw new Error("Must be valid post");
  }

  try {
    // inside a command, event listener, etc.
    const exampleEmbed = new MessageEmbed()
      .setColor("#FF5700")
      .setTitle(post.title)
      .setURL("https://reddit.com" + post.permalink)
      .setAuthor({
        name: post.author,
        iconURL: "https://www.reddit.com/favicon.ico",
        url: "https://www.reddit.com/user/" + post.author,
      })
      .setImage(post.url)
      .setTimestamp()
      .setFooter({
        text: "r/" + subreddit,
        url: "https://www.reddit.com/r/" + subreddit,
      });

    client.channels.cache.get(channelId).send({ embeds: [exampleEmbed] });
  } catch (error) {
    console.error("Error on sendMessage");
  }
}

// Export the function
module.exports = {
  sendMessage,
};
