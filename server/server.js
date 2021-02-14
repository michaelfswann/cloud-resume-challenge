// External Modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// App Variables
const app = express();
const port = process.env.SERVER_PORT || "8000";
const addToVisitorCounter = require("./db/models/updateAtomicCounter");
const getCounter = require("./db/models/readCounter");

//  App Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes Definitions
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>Cloud Resume Challenge</h1><p>Server is listening for requests...</p>"
    );
});

app.get("/counter", async (req, res) => {
  const data = await getCounter();
  res.send(data);
});

app.get("/addToCounter", async (req, res) => {
  const result = await addToVisitorCounter();
  console.log(result);
  res.status(200).json(result);
});

// Server Activation
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
