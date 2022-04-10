const AWS = require('aws-sdk');
const chalk = require('chalk');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

// Configure environment variables
dotenv.config();

// Configure AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
  region: process.env.AWS_REGION,
});

// Declare a new express app
const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all methods
app.use(cors({ credentials: true, origin: true }));

// Enable json for all methods
app.use(express.json());

// Route
app.use('/v1/test', require('./api/v1/test').router);

app.listen(port, () => {
  console.log(chalk.green(`[server] Server running on port ${port}...`));
});

module.exports = app;
