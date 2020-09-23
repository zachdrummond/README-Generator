// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description


## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
  
## Installation


## Usage


## License


## Contributing


## Tests


## Questions


`;
}

module.exports = generateMarkdown;
