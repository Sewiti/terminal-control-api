const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/exec',   require('./src/exec'));
// app.use('/test', require('./src/test'));


app.listen(port, () => { console.log(`[${new Date().toLocaleString()}] Listening on port ${port}...`) });

// const fs = require('fs');
// const https = require('https');
// https.createServer({
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert')
// }, app)
// .listen(port, () => {
//   console.log(`[${new Date().toLocaleString()}] Listening on port ${port}...`);
// });
