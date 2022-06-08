const axios = require("axios");

async function getTopOfDay() {
  const request = await axios.get(
    "https://www.reddit.com/r/unket/top.json?sort=top&t=hour&limit=1"
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
