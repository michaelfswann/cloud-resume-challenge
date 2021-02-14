// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
const { REGION, APIVERSION } = require("../config");

AWS.config.update({ region: REGION });

async function addToVisitorCounter() {
  // Create the DynamoDB service object
  var docClient = new AWS.DynamoDB.DocumentClient(APIVERSION);

  var params = {
    TableName: "counterTable",
    Key: {
      counterId: "visitors",
    },
    UpdateExpression: "set counterValue = counterValue + :val",
    ExpressionAttributeValues: {
      ":val": 1,
    },
    ReturnValues: "UPDATED_NEW",
  };

  const stuff = await docClient.update(params, function (err, data) {
    if (err) {
      console.log(
        "Unable to update: " + "\n" + JSON.stringify(err, undefined, 2)
      );
    } else {
      const result = JSON.stringify(data, undefined, 2);
      console.log("Increase Rating succeeded: " + "\n" + result);
    }
    return data;
  });
  return stuff;
}

module.exports = addToVisitorCounter;
