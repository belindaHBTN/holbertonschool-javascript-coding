#!/usr/bin/node

const request = require('request');
const process = require('process');

const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) console.log(err);
  const todoDict = {};
  JSON.parse(body).forEach(element => {
    if (element.completed) {
      const user = element.userId;
      if (todoDict[user]) {
        todoDict[user] += 1;
      } else {
        todoDict[user] = 1;
      }
    }
  });
  console.log(todoDict);
});
