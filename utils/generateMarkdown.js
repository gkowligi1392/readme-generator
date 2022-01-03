const { licenses } = require("./data");

//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "") {
        return "";
    }
    const licenseInfo = licenses.filter((b) => b.value === license);
    return licenseInfo[0].badge;
}

//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return `(https://choosealicense.com/licenses/${license}/)`;
}

//Create a function that returns the license section of README
// If there is no license, return an empty string
function getLicenseName(license) {
    if (license === "") {
        return "";
    }
    const licenseInfo = licenses.filter((b) => b.value === license);
    return licenseInfo[0].name;
}

function renderLicenseSection(license, email) {
    if (license === "") {
        return "";
    }
    const licenseName = getLicenseName(license);

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

//renden the table of Content
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
    const {
        username,
        email,
        title,
        description,
        installation,
        usage,
        contributing,
        questions,
        license,
        test,
    } = data;
    return `
    # ${title}
    ${renderLicenseBadge(license)}\n
    ## Description\n
    ${description}\n
    ${renderTableOfContent(data)}
    ${renderSection("Installation", installation)}\n
    ${renderSection("Usage", usage)}\n
    ${renderSection("Contributing", contributing)}\n
    ${renderSection("Tests", test)}\n
    ${renderSectionQuestions(questions, username)}\n
    ${renderLicenseSection(license, email)}
    `;
}

module.exports = generateMarkdown;