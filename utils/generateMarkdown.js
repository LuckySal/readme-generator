// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // TODO: Implement
    return "License Badge";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    // TODO: Implement
    return "License Link";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    // TODO: Implement
    return "License Description";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests for this application, run the following command:

    ${data.test}

## Questions

If you have questions, please contact me at:

[${data.username}](https://github.com/${data.username}) \([Email](mailto:${data.email})\)
`;
}

module.exports = generateMarkdown;
