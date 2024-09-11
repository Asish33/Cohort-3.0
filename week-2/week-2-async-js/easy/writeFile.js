const fs = require('fs');

const write = () => {
    const String_To_write = "Hey everyone !"
    fs.writeFile('b.txt', String_To_write, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Done');
        }
    });
}

write();