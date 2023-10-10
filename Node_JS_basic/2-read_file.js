const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
  try {
    // const data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });

    const stream = fs.createReadStream(path);
    const rl = readline.createInterface({ input: stream });
    const data = [];

    rl.on('line', (row) => {
      data.push(row.split('\n'));
    });

    rl.on('close', () => {
      console.log(`Number of students: ${data.length - 1}`);

      const dataStrArr = data.map((strArr) => (strArr[0]));

      const dataArr = [];
      for (const sentence of dataStrArr) {
        dataArr.push(sentence.split(','));
      }

      const csArr = [];
      const sweArr = [];

      for (let i = 0; i < dataArr.length; i += 1) {
        if (dataArr[i][3] === 'CS') {
          csArr.push(dataArr[i][0]);
        } else if (dataArr[i][3] === 'SWE') {
          sweArr.push(dataArr[i][0]);
        }
      }

      const numCS = csArr.length;
      const numSWE = sweArr.length;
      const nameCS = csArr.join(', ');
      const nameSWE = sweArr.join(', ');

      console.log(`Number of students in CS: ${numCS}. List: ${nameCS}`);
      console.log(`Number of students in SWE: ${numSWE}. List: ${nameSWE}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
