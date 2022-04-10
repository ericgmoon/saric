const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const getStaff = async (staffId) => {
  const params = {
    TableName: 'staff',
    Key: {
      staffId,
    },
  };

  const data = await docClient.get(params).promise();
  return data?.Item;
};

module.exports = {getStaff}