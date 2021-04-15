const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  { type: 'input', message: 'what is your GitHub username?', name: 'gitHub' },
  { type: 'input', message: 'what is your email address?', name: 'email' },
  { type: 'input', message: "what is your project's name?", name: 'gitHub' },
  { type: 'input', message: 'Please write a short description of project:', name: 'description' },
  { type: 'input', message: 'what kind of license should your project have?', name: 'license' },
  { type: 'input', message: 'what command should be run to install dependencies', name: 'dependencies' },
  { type: 'input', message: 'what command should be run to run tests', name: 'tests' },
  { type: 'input', message: 'what does the user need to know about using the repo', name: 'repo use' },
  { type: 'input', message: 'what does the user need to know about contributing to the repo', name: 'repo contribution' },
];

inquirer
  .prompt(questions)
  .then(response => {
    writeUp(response);
  });

const writeUp = (data) => {

  fs.writeFile("readMe.md", `
  
  `, err => console.log(err));
}