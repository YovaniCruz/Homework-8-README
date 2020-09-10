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
        message: "Please enter a description of this project"
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
     
];

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
