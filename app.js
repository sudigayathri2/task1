// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Handle the /greet command
app.post('/greet', (req, res) => {
  const userInput = req.body.text || 'there';
  const userName = req.body.user_name;

  const message = `👋 Hello, ${userInput}! ${userName} sends their greetings.`;

  return res.json({
    response_type: 'in_channel', // or "ephemeral" for private replies
    text: message
  });
});

module.exports = app;
