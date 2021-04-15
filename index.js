const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  { type: 'input', message: 'What is your GitHub username?', name: 'gitHub' },
  { type: 'input', message: 'What is your email address?', name: 'email' },
  { type: 'input', message: 'What is your project\'s name?', name: 'project_name' },
  { type: 'input', message: 'Please write a short description of project:', name: 'description' },
  { type: 'input', message: 'What kind of license should your project have?', name: 'license' },
  { type: 'input', message: 'What command should be run to install dependencies?', name: 'dependencies' },
  { type: 'input', message: 'What command should be run to run tests?', name: 'tests' },
  { type: 'input', message: 'What does the user need to know about using the repo?', name: 'repo_use' },
  { type: 'input', message: 'What does the user need to know about contributing to the repo?', name: 'repo_contribution' },
];

inquirer
  .prompt(questions)
  .then(response => {
    writeUp(response);
  });

const writeUp = (data) => {

  fs.writeFile("readMe.md", `

    ## Table of Contents
    1. [Description] (#desc)
    
    <a name="description"></a>
    ## Description
    ${data.description}

  
    ${data.gitHub}
    ${data.email}
    ${data.project_name}
    ${data.license}
    ${data.dependencies}
    ${data.tests}
    ${data.repo_use}
    ${data.repo_contribution}

  `, err => console.log(err));
}