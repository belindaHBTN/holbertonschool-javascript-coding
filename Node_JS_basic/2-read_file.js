const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const studentData = lines.slice(1).map((line) => line.split(','));
    console.log(`Number of students: ${studentData.length}`);

    const cs = [];
    const swe = [];
    for (let i = 0; i < studentData.length; i += 1) {
      if (studentData[i][3] === 'CS') {
        cs.push(studentData[i][0]);
      } else if (studentData[i][3] === 'SWE') {
        swe.push(studentData[i][0]);
      }
    }
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
