const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = () => {
  readline.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
  });

  readline.on('close', () => {
    console.log('This important software is now closing');
  });
};

if (require.main === module) {
  main();
}

module.exports = main;
