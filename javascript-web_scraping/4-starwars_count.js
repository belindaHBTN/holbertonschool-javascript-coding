#!/usr/bin/node

const request = require('request');
const process = require('process');

const url = process.argv[2];
const id = '18';

request(url, (err, response, body) => {
  if (err) console.log(err);
  const results = JSON.parse(body).results;
  let sum = 0;
  results.forEach((el) => {
    el.characters.forEach((link) => {
      if (link.indexOf(id) !== -1) {
        sum += 1;
      }
    });
  });
  console.log(sum);
});
