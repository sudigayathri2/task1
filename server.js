const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/greet', (req, res) => {
  console.log('Slash command received:', req.body);
  const name = req.body.text || 'guest';
  res.json({
    response_type: 'in_channel',
    text: `👋 Hello, ${name}! Welcome to the channel!`
  });
});

app.listen(port, () => {
  console.log(`Slack app listening at http://localhost:${port}`);
});
//
// git remote add origin https://github.com/sudigayathri2/task1.git