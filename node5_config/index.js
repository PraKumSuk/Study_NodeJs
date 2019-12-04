// Set up Configurations
var defaultEnv = 'dev'; //Set your default environment here
var env = process.env.NODE_ENV || defaultEnv; //Automatically picks env details from Env Var if not set picks default
var config = require('./config/config-' + env)[env]; //Config file placed in dir called config

// Set up logger
const { createLogger, transports, format } = require("winston");
const logger = createLogger({
  level: "info",
  format: format.combine(format.json(), format.timestamp()),
  transports: [new transports.File({ filename: `${config.logging.path}index-${env}.log`, level: "info" })] //Set log path and file name here
});

// Test Service
const express = require("express");
const app = express();

app.get("/", (req, res) => {

    // Some logging here
    logger.info(`The config values obtained from ---> ${env} are :`);
    logger.warn('Cdn URL is : ' + config.cdnURL);
    logger.error('Database host is : ' + config.database.host);
    logger.debug('Server port is : ' + config.server.port);
    logger.info('Log Path is : ' + config.logging.path);

    // Some console logs here
    console.log(`The config values obtained from ---> ${env} are :`);
    console.log('Cdn URL is : ' + config.cdnURL);
    console.log('Database host is : ' + config.database.host);
    console.log('Server port is : ' + config.server.port);
    console.log('Log Path is : ' + config.logging.path);
  
    res.send(
      "Hurray!!!!! Request Processed........check the logs for more details on the configurations used for environment."
    );
  });
  
  app.listen(3000, () => {
    console.log(`Listening on port 3000.............`);
  });