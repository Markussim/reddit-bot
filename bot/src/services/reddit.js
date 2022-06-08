// External dependencies:
const axios = require("axios");

async function getTopOfDay(subreddit) {
  const request = await axios.get(
    `https://www.reddit.com/r/${subreddit}/top.json?sort=top&t=hour&limit=1`
  );
  return extractTopOfDay(request);
}

function extractTopOfDay(response) {
  return response.data.data.children[0].data;
}

// Export the function
module.exports = {
  getTopOfDay,
};
