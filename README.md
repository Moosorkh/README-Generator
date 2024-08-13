# README-Generator

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This project is an application designed to demonstrate the process of generating a README file using Node.js and Inquirer.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

To install this project, clone the repository and run 'npm install' to install all dependencies.

## Usage

After installation, run 'node index.js' in the terminal to start the application. Follow the prompts to generate a custom README file.

## Code Snippets

Below are some key code snippets from this project:

### genrateMarkdown.js

```javascript
 // a function that returns a license badge based on which license is passed in
function renderLicenseBadge(licenseBadge) {
  if (licenseBadge === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (licenseBadge === "Apache 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (licenseBadge === "GPL 3.0") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (licenseBadge === "BSD 3") {
    return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  } else {
    // If there is no license, return an empty string
    return "";
  }
}

// a function that returns the license link
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3") {
    return "[BSD 3](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    // If there is no license, return an empty string
    return "";
  }
}

// a function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (!license) {
    return "";
  }
  return `## License
  This project is licensed under the ${license} license.`;
}


// a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ${renderLicenseSection(data.license)}
  ## Questions
If you have any questions, please open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

export default generateMarkdown;
```
### index.js
```javascript
// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    }
];

// a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('README.md file created successfully!');
        }
    });
}

// a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();

```
### test.js
```javascript
// Import the generateMarkdown function 
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';

// Simple Test Function
function runTest() {
    const testData = {
        title: 'Test Project',
        description: 'This is a description for a test project.',
        installation: 'Run npm install to install dependencies.',
        usage: 'Run node index.js to start the application.',
        contributing: 'Feel free to contribute!',
        tests: 'No tests available yet.',
        license: 'MIT',
        github: 'testuser',
        email: 'test@example.com',
    };

    console.log('Running test mode...');
    const output = generateMarkdown(testData);
    console.log(output);

    // Write the test output to a file
    fs.writeFile('TEST_README.md', output, (err) => {
        if (err) {
            console.error('Error writing test output:', err);
        } else {
            console.log('TEST_README.md file created successfully!');
        }
    });
}

// Run the test function
runTest();
```

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## Tests

To run tests, execute 'node test.js' in the terminal. The test.js was added after the demo video was recorded

## License

This project is licensed under the MIT license.

## Questions

If you have any questions, please open an issue or contact me directly at Moosorkh@gmail.com. You can find more of my work at [Moosorkh](https://github.com/Moosorkh).

## Link to the Video

[Video Demonstration](https://drive.google.com/file/d/1hvA6VSPlLn28yKfJBGqVGp6KOwT0-6zc/view)

## Link to the GitHub Repository

[GitHub Repository](https://github.com/Moosorkh/README-Generator.git)
