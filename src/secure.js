const express = require('express');
const { createSecretKey } = require('crypto');
const { V2 } = require('paseto');
const { exec } = require('child_process');
require('dotenv/config');

const router = express.Router();
const secret = Buffer.from(process.env.SECRET, 'base64');
const key = createSecretKey(secret);


router.get('/:token', async (req, res) => {
  try {
    const result = await V2.decrypt(req.params.token, key);

    console.log(`[${new Date().toLocaleString()}] Executing "${result.command}"`);
    exec(result.command);

    res.send();
  }
  catch (e) {
    console.error(e);
    res.status(400).json({ message: 'Bad request.' });
  }
});


module.exports = router;
