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
    writeUp(response);
  });

const writeUp = (data) => {

fs.writeFile("results.md", `

<a name="project_name"></a>
## **${data.project_name}**

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
${data.email}
${data.gitHub}


`, err => {if (err) {
    console.log(err);
} else {
    console.log("Generating ReadMe...");
}
});
}