const fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error(err);
    }

    const arr = data.split(', ');

    arr.forEach((item) => {
        console.log(item);
    });
});
