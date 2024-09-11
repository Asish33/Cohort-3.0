const fs = require('fs');

const read = (file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.log("An Error Occured :", err)
            return;
        }
        else {
            const text = data.replace(/\s+/g, ' ').trim();
            write(file , text);
        }
    })
    
}

const write = (file,text) => {
    fs.writeFile(file, text, (err) => {
        if (err) {
            console.log("An Error Occured :", err);
            return;
        }
        return;
    })
}

const file = 'c.txt';
read(file);