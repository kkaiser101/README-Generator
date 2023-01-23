// The packages we use are here
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// The questions that are asked in the prompt
const questions = [
    "What is the title of your project?", //[0]
    "Describe what your project does:", //[1]
    "How do you install your project?", //[2]
    "How could we use your project?", //[3]
    "Select a license for this project:", //[4]
    "How can users contribute to this project?", //[5]
    "Give testing instructions here:", //[6]
    "What is your github username?", //[7]
    "What is your github email address?" //[8]
];

// Here is where we ask the user for input

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[3],
    },
    {
      type: 'list',
      name: 'license',
      message: questions[4],
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause Simplified License",
        "BSD 3-Clause New or Revised License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unilicense",
        "None",
      ],
    },
    {
      type: 'input',
      name: 'contribution',
      message: questions[5],
    },
    {
      type: 'input',
      name: 'test',
      message: questions[6],
    },
    {
      type: 'input',
      name: 'githubAccount',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'githubEmail',
      message: questions[8],
    }
  ])
  .then((data) => {
    const markdownPages = generateMarkdown(data);
// Here use the generateMarkdown.js file to create the markdown file
    fs.writeFile('./yourREADME/README.md', markdownPages, (err) =>
    err ? console.log(err) : console.log('Successfully created a README!')
  );
  });
