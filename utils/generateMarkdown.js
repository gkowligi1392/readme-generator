// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "") {
        return "";
    }
    return `
    [![License: GPL v2](https://img.shields.io/badge/License-${license}-blue.svg)](https://www.gnu.org/licenses/old-licenses/${license}.en.html)
    `;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return `(https://choosealicense.com/licenses/${license}/)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, email) {
    if (license === "") {
        return "";
    }
    let licenseName = "";

    if (license === "agpl-3.0") licenseName = "GNU AGPLv3";
    if (license === "gpl-3.0") licenseName = "GNU GPLv3";
    if (license === "lgpl-3.0") licenseName = "GNU LGPLv3";
    if (license === "mpl-2.0") licenseName = "Mozilla Public License 2.0";
    if (license === "apache-2.0") licenseName = "Apache License 2.0";
    if (license === "mit") licenseName = "MIT License";
    if (license === "bsl-1.0") licenseName = "Boost Software License 1.0";
    if (license === "unlicense") licenseName = "The Unlicense";

    return `
    ## License\n
    Code released under the ${licenseName} [License]${renderLicenseLink(license)}. 
    for additional questions please feel free to contact us via email at ${email}`;
}

//Render section
function renderSection(sectionTitle, data) {
    if (!data) return "";
    return `
    ## ${sectionTitle}\n
    ${data}
    `;
}

function renderSectionQuestions(data, githubUsername) {
    if (!data) return "";
    return `
    ## Questions\n
    ${data}\n
    checkout the [GitHub profile](https://github.com/${githubUsername})
    `;
}

//render the table of Contents
function renderTableOfContent(data) {
    let temp = "## Table of Contents\n";
    if (data.installation) temp += `* [Installation](#installation)\n`;
    if (data.usage) temp += `* [Usage](#usage)\n`;
    if (data.contributing) temp += `* [Credits](#credits)\n`;
    if (data.tests) temp += `* [Tests](#tests)\n`;
    if (data.questions) temp += `* [Questions](#questions)\n`;
    if (data.license) temp += `* [License](#license)\n`;

    return temp;
}

//Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
    ${renderLicenseBadge(data.license[0])}\n
    ## Description\n
    ${data.description}\n
    ${renderTableOfContent(data)}
    ${renderSection("Installation", data.installation)}\n
    ${renderSection("Usage", data.usage)}\n
    ${renderSection("Contributing", data.contributing)}\n
    ${renderSection("Tests", data.tests)}\n
    ${renderSectionQuestions(data.questions, data.username)}\n
    ${renderLicenseSection(data.license[0], data.email)}
    `;
}

module.exports = generateMarkdown;