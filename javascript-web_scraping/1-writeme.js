#!/usr/bin/node

const fs = require('fs');
const process = require('process');

const fileName = process.argv[2];
const fInput = process.argv[3];

fs.writeFile(fileName, fInput, (err) => {
  if (err) throw err;
});
