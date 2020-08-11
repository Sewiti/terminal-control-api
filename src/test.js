const express = require('express');
const { createSecretKey } = require('crypto');
const crypto = require('crypto');
const { V2 } = require('paseto');
require('dotenv/config');

const router = express.Router();
const secret = Buffer.from(process.env.SECRET, 'base64');
const key = createSecretKey(secret);


router.get('/:command', async (req, res) => {
  try {
    const payload = { command: req.params.command };

    const token = await V2.encrypt(payload, key, { expiresIn: '5 seconds' });

    res.json({ token });
  }
  catch (e) {
    console.error(e);
    res.status(400).json({ message: 'Bad request.' });
  }
});


module.exports = router;
