const inquirer = require("inquirer");
const fs = require("fs"); 
const path = require("path")

const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?"
      },
      {
        type: "input",
        name: "name",
        message: "What is your GitHub user name?",
      },
      {
        type: "input",
        name: "description",
        message: "Please enter a description of this project."
      },
      {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions."
      },
      {
        type: "input",
        name: "usage",
        message: "Provide usage guidelines for this project."
      },
      {
        type: "list",
        name: "license",
        message: "Which license do you prefer for this project?",
        choices: ["GNUAGPLv3", "GNUGPLv3", "GNULGPLv3", "MozillaPublicLicense2.0", "ApacheLicense2.0", "MITLicense", "BoostSoftwareLicense1.0", "TheUnlicense", "None"]
      },
];

// function providing the README format
function generateREADME(answers) {
    return `
    # ${answers.title} ![license badge](https://img.shields.io/static/v1?label=license&message=${answers.license}&color=blue)
    ${answers.description}
  
    ## Table of Contents
    [Title](#title)
    [Name](#name)  
    [Description](#description)  
    [Installation](#installation)  
    [Usage](#usage)  
    [License](#license)  
  

    ## Title
    ${answers.tile}
    
    ## Name
    ${answers.name}

    ## Description
    ${answers.description}
  
    ## Installation
    ${answers.installation}
  
    ## Usage
    ${answers.usage}
  
    ## License
    ${answers.license}
  `;
  }

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(answers){
    console.log (answers)

    writeToFile("README.md", generateMarkdown(answers))
})
}

// function call to initialize program
init();
