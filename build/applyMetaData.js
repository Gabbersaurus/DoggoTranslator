`use strict`;

const fs = require('fs');
const meta = require('../meta.json');

module.exports = function () {
    //Somehow ../dist goes too far. Maybe build.js changes the root.
    fs.readFile('./dist/index.html', 'utf8', function (error, data) {
        if (error) {
            throw error;
        }

        for (let key in meta) {
            if (meta.hasOwnProperty(key)) {
                let value = meta[key];

                //Webpack does some strange things so I have to add my own quotes.
                data = data.replace('{{' + key + '}}', '"' + value + '"')
            }
        }

        fs.writeFile('./dist/index.html', data, function (error) {
            if (error) {
                throw error;
            }

            console.log('Applied metadata to index.html');
        });
    });
}
