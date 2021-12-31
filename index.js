// Include packages needed for this application

const inquirer = require("inquirer");
const writeToFile = require("./utils/fileManager");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

// Create a function to initialize app
function init() {
    // Ask for questions
    inquirer
        .prompt(questions)
        .then(answers => {
            const data = generateMarkdown(answers);
            const filename = `./dist/README-${answers.title}.md`;
            return writeToFile(filename, data);
        })
        .then((data) => console.log(data.message))
        .catch((error) => console.log(error));
}

// Function call to initialize app
init();