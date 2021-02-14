// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
const { REGION, APIVERSION } = require("../config");

AWS.config.update({ region: REGION });

// Create DynamoDB document client
var docClient = new AWS.DynamoDB.DocumentClient(APIVERSION);

getCounter = (event, context, callback) => {
  const params = {
    Key: {
      counterId: "visitors",
    },
    TableName: "counterTable",
  };

  return docClient
    .get(params)
    .promise()
    .then((res) => {
      if (res.Item) {
        return res.Item;
      }
    });
};

module.exports = getCounter;
