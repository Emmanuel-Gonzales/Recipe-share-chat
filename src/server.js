'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to the Backend');
});

const start = (port) => app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = {start, app};