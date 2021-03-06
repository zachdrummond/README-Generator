// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${getLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
  
## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is covered under the ${getLicense(data.license)} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions or issues regarding this application:
* GitHub Profile: https://github.com/${data.username}
* Email: ${data.email}`;
}

// Function - Grabs the License Badge based on the User's Choice
function getLicenseBadge(licenseChoice) {
  switch (licenseChoice) {
    case "Apache License":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "Boost Software License":
      return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case "GNU General Public License":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "ISC License":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
    case "MIT License":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "Mozilla Public License":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case "The Unlicense":
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
    default:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
  }
}

// Function - Grabs the License based on the User's Choice
function getLicense(licenseChoice) {
  switch (licenseChoice) {
    case "Apache License":
      return `[Apache](https://choosealicense.com/licenses/apache-2.0/)`;
      break;
    case "Boost Software License":
      return `[Boost](https://choosealicense.com/licenses/bsl-1.0/)`;
      break;
    case "GNU General Public License":
      return `[GNU](https://choosealicense.com/licenses/gpl-3.0/)`;
      break;
    case "ISC License":
      return `[ISC](https://choosealicense.com/licenses/isc/)`;
      break;
    case "MIT License":
      return `[MIT](https://choosealicense.com/licenses/mit/)`;
      break;
    case "Mozilla Public License":
      return `[Mozilla](https://choosealicense.com/licenses/mpl-2.0/)`;
      break;
    case "The Unlicense":
      return `[Unlicense](https://choosealicense.com/licenses/unlicense/)`;
      break;
    default:
      return `[MIT](https://choosealicense.com/licenses/mit/)`;
      break;
  }
}

// Exports the Module
module.exports = generateMarkdown;
