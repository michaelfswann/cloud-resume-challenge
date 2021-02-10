// External Modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// App Variables
const app = express();
const port = process.env.SERVER_PORT || "8000";

//  App Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes Definitions
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>Cloud Resume Challenge</h1><br /><p></p>Express server is listening for requests...</p>"
    );
});

// Server Activation
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
