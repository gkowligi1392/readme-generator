// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log("file README Done!!");
    });
}

// Create a function to initialize app
function init() {
    // Ask for questions
    inquirer
        .prompt(questions)
        .then(answers => {
            const data = generateMarkdown(answers);
            const filename = `./dist/README-${answers.title}.md`;
            writeToFile(filename, data);
        })
        .catch(error => {
            console.log(error);
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });
}

// Function call to initialize app
init();