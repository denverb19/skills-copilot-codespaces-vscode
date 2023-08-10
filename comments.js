// Create web server
// Run: node comments.js
// Test: curl -X POST -H "Content-Type: application/json" -d '{ "body": "comment body" }' http://localhost:3000/comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Create a new comment
app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));