#!/usr/bin/node

const request = require('request');
const process = require('process');
const fs = require('fs');

const url = process.argv[2];
const fileName = process.argv[3];

request(url, (err, response, body) => {
  if (err) console.log(err);
  fs.writeFile(fileName, body, (err) => {
    if (err) throw err;
  });
});
