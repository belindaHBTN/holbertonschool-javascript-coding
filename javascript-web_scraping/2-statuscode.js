#!/usr/bin/node

const request = require('request');
const process = require('process');

const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) console.log(err);
  console.log(response.statusCode);
});
