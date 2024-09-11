//Reading contents from file using Async function fs.readFile();

const fs = require('fs');

const text = fs.readFile('a.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})