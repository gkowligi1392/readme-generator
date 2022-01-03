const fs = require("fs");

// Create a function to write README file
function writeToFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
        if (err) {
            reject(err);
            return;
        } else {
            resolve({
            ok: true,
            message: "File Created!!!",
            });
        }
        });
    });
}

module.exports = writeToFile;