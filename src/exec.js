const express = require('express');
const { exec } = require('child_process');
require('dotenv/config');

const router = express.Router();


router.post('/', (req, res) => {
  try {
    const command = req.body.command;

    if (!command) {
      res.status(400).json({ message: 'Bad request.' });
    }

    console.log(`[${new Date().toLocaleString()}] Executing "${command}"`);
    exec(command);

    res.json({ message: 'Command has been executed.' });
  }
  catch (e) {
    console.error(e);
    res.status(400).json({ message: 'Bad request.' });
  }

});


module.exports = router;
