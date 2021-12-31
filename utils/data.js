const licenses = [
    {
        name: "GNU AGPLv3",
        value: "agpl-3.0",
        badge:
            "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    },
    {
        name: "GNU GPLv3",
        value: "gpl-3.0",
        badge:
            "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    },
    {
        name: "GNU LGPLv3",
        value: "lgpl-3.0",
        badge:
            "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    },
    {
        name: "Mozilla Public License 2.0",
        value: "mpl-2.0",
        badge:
            "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    },
    {
        name: "Apache License 2.0",
        value: "apache-2.0",
        badge:
            "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    },
    {
        name: "MIT License",
        value: "mit",
        badge:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    },
    {
        name: "Boost Software License 1.0",
        value: "bsl-1.0",
        badge:
            "[![License: BSL1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    },
    {
        name: "The Unlicense",
        value: "unlicensname",
        badge:
            "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    },
];

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate(value) {
            if (value) return true;
            return "Please enter a title for your project";
        },
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your project",
        validate(value) {
            if (value) return true;
            return "Please enter a description for your project";
        },
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage instructions for your project",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contributing instructions for your project",
    },
    {
        type: "input",
        name: "test",
        message: "Please enter test instructions for your project",
    },
    {
        type: "input",
        name: "questions",
        message: "Please enter any questions for your project",
    },
    {
        type: checkbox,
        name: "license",
        message: "Please select a license for your project",
        choices: licenses,
        validate(answer) {
            if (answer.length === 1) return true;
            return "You must choose ONLY one license.";
        },
    },
    {
        type: "input",
        name: "username",
        message: "Github username?(Required)",
        validate(value) {
            if (value) {
                //TODO: Validate if the username exists in github
                return true;
            }
            return "Please Provide a Github username";
            },
        },
        {
            type: "input",
            name: "email",
            message: "Your email?(Required)",
            validate(value) {
            const pass = value.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if (pass) {
                return true;
            }
            return "Please enter a valid email address";
            },
        },
    ];
    
    module.exports = { questions, licenses };