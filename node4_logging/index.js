const express = require("express");
const app = express();

// Set up logger using winston module
const { createLogger, transports, format } = require("winston");
const logger = createLogger({
  level: "info",
  format: format.combine(format.json(), format.timestamp()),
  transports: [new transports.File({ filename: "index.log", level: "info" })]
});

// Test Service
app.get("/", (req, res) => {

  // Some logging here of various types
  logger.info("This is a infooo...................");
  logger.warn("This is a warning......");
  logger.error("This is a warning.........................");

  res.send(
    "Hurray!!!!! Request Processed........check the logs for more details."
  );
});

app.listen(3000, () => {
  console.log(`Listening on port 3000.............`);
});