#!/usr/bin/node

const request = require('request');
const process = require('process');

const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request(url, (err, response, body) => {
  if (err) console.log(err);
  const filmTitle = JSON.parse(body).title;
  console.log(filmTitle);
});
