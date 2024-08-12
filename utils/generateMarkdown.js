// TODO: Create a function that returns a license badge based on which license is passed in
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

// TODO: Create a function that returns the license link
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

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (!license) {
    return "";
  }
  return `## License
  This project is licensed under the ${license} license.`;
}


// TODO: Create a function to generate markdown for README
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