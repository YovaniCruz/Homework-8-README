const inquirer = require("inquirer");
const fs = require("fs"); 
const path = require("path")


const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
      },
      {
        type: "input?",
        message: "What is your GitHub user name?",
        name: "GitHub",
    
      },
      {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "contact",
        choices: [
          "email",
          "phone",
          "telekinesis"
        ]
      }   
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
