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
    }else if(response.license == 'APACHE 2.0'){
        response.badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }else if(response.license == 'GPL 3.0'){
        response.badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }else if(response.license == 'BSD 3'){
        response.badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
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
${data.description}

<a name="installation"></a>
## Installation
${data.installation}
  
<a name="usage"></a>
## Usage
${data.usage}

<a name="contributing"></a>
## Contributing
${data.contributing}

<a name="license"></a>
## License
${data.license}

<a name="test"></a>
## Tests
${data.tests}

<a name="questions"></a>
## Questions
If you have any additional questions, please email me at ${data.email}.<br />
GitHub: [${data.gitHub}](https://github.com/${data.gitHub})


`, err => {if (err) {
    console.log(err);
} else {
    console.log("Generating ReadMe...");
}
});
}