// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const questions = require("./utils/questions");
// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    // TODO: Ask for questions
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });
}

// Function call to initialize app
init();