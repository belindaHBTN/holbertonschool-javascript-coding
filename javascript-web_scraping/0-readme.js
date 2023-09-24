#!/usr/bin/node

const fs = require('fs');
const process = require('process');

const fileName = process.argv[2];
fs.readFile(fileName, (err, content) => {
  if (err) throw err;
  console.log(content.toString());
});
