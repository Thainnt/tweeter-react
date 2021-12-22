require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');

const router = require('./routes/routes.js');
const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

app.use('/', router);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});

// app.listen(port, () => console.log(`Listening on port ${port}`));

// app.get('/api', (req, res) => {
  // res.send({ express: 'Server connected to react' });
// });