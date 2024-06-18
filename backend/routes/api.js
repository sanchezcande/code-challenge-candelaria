const express = require('express');
const router = express.Router();

let myName = 'Candelaria';

router.get('/name', (req, res) => {
  res.json({ name: myName });
});

router.post('/name', (req, res) => {
  const { name } = req.body;
  if (name) {
    myName = name;
    res.send('Name saved correctly');
  } else {
    res.status(400).send('Name is required');
  }
});

router.post('/avatar', (req, res) => {
  res.send('Avatar subido correctamente');
});

module.exports = router;
