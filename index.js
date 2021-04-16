const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  { type: 'input', message: 'What is your GitHub username?', name: 'gitHub' },
  { type: 'input', message: 'What is your email address?', name: 'email' },
  { type: 'input', message: 'What is your project\'s name?', name: 'project_name' },
  { type: 'input', message: 'Please write a short description of project:', name: 'description' },
  { type: 'list', message: 'What kind of license should your project have?', name: 'license', choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'] },
  { type: 'input', message: 'What command should be run to install dependencies?', name: 'installation' },
  { type: 'input', message: 'What command should be run to run tests?', name: 'tests' },
  { type: 'input', message: 'What does the user need to know about using the repo?', name: 'usage' },
  { type: 'input', message: 'What does the user need to know about contributing to the repo?', name: 'contributing' },
];

inquirer
  .prompt(questions)
  .then(response => {
    if(response.license == 'MIT'){
        response.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        response.badgeDescription = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
        response.badgeDescriptionSource = 'https://choosealicense.com/licenses/mit/';
    }else if(response.license == 'APACHE 2.0'){
        response.badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        response.badgeDescription = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
        response.badgeDescriptionSource = 'https://choosealicense.com/licenses/apache-2.0/';
    }else if(response.license == 'GPL 3.0'){
        response.badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        response.badgeDescription = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
        response.badgeDescriptionSource = 'https://choosealicense.com/licenses/gpl-3.0/';
    }else if(response.license == 'BSD 3'){
        response.badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        response.badgeDescription = 'A simple license that merely requires that all code retain the BSD license notice if redistributed in source code format, or reproduce the notice if redistributed in binary format. It (unlike some other licenses e.g. GPL) does not require that source code be distributed at all.';
        response.badgeDescriptionSource = 'https://en.wikipedia.org/wiki/BSD_licenses';
    }
    writeUp(response);
  });

const writeUp = (data) => {

fs.writeFile("results.md", `

<a name="project_name"></a>
## **${data.project_name}**

${data.badge}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)
6. [Tests](#tests)
7. [Questions](#questions)

<a name="description"></a>
## Description
* ${data.description}

<a name="installation"></a>
## Installation
* ${data.installation}
  
<a name="usage"></a>
## Usage
* ${data.usage}

<a name="contributing"></a>
## Contributing
* ${data.contributing}

<a name="license"></a>
## License
${data.license}<br />
* ${data.badgeDescription}
* Source: ${data.badgeDescriptionSource}

<a name="test"></a>
## Tests
* ${data.tests}

<a name="questions"></a>
## Questions
* If you have any additional questions, please email me at ${data.email}.<br />
* GitHub: [${data.gitHub}](https://github.com/${data.gitHub})


`, err => {if (err) {
    console.log(err);
} else {
    console.log("Generating ReadMe...");
}
});
}