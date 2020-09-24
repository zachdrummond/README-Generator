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

module.exports = generateMarkdown;

function getLicenseBadge(licenseChoice) {
  if (licenseChoice === "Apache License") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (licenseChoice === "Boost Software License") {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (licenseChoice === "ISC License") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (licenseChoice === "GNU General Public License") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (licenseChoice === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (licenseChoice === "Mozilla Public License") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (licenseChoice === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

function getLicense(licenseChoice) {
  if (licenseChoice === "Apache License") {
    return `[Apache](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (licenseChoice === "Boost Software License") {
    return `[Boost](https://choosealicense.com/licenses/bsl-1.0/)`;
  } else if (licenseChoice === "GNU General Public License") {
    return `[GNU](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (licenseChoice === "ISC License") {
    return `[ISC](https://choosealicense.com/licenses/isc/)`;
  } else if (licenseChoice === "MIT License") {
    return `[MIT](https://choosealicense.com/licenses/mit/)`;
  } else if (licenseChoice === "Mozilla Public License") {
    return `[Mozilla](https://choosealicense.com/licenses/mpl-2.0/)`;
  } else if (licenseChoice === "The Unlicense") {
    return `[Unlicense](https://choosealicense.com/licenses/unlicense/)`;
  }
}
