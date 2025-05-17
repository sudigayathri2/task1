const axios = require('axios');

const webhookUrl = 'https://hooks.slack.com/services/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'; // Replace with your actual webhook URL

const messagePayload = {
  text: "its working",
};

axios.post(webhookUrl, messagePayload)
  .then(() => {
    console.log('Message sent!');
  })
  .catch((error) => {
    console.error('Error sending message:', error);
  });
