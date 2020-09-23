const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the title of your project?",
  "Please provide a description of your project.",
  "What are the steps required to install your project?",
  "Please provide instructions and examples for using your project.",
  "Which license would you like to choose?",
  "What guidelines would you like to add for how others can contribute to this project?",
  "What test instructions would you like to offer?",
  "What is your GitHub username?",
  "What is your email?",
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (error) throw error;
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
        default: "Title TBD",
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
        default: "Professional Description TBD",
      },
      {
        type: "input",
        name: "installation",
        message: questions[2],
        default: "Installation Instructions",
      },
      {
        type: "input",
        name: "usage",
        message: questions[3],
        default: "Usage Information",
      },
      {
        type: "input",
        name: "license",
        message: questions[4],
        default: "License",
      },
      {
        type: "input",
        name: "contributing",
        message: questions[5],
        default: "Contribution Guidelines",
      },
      {
        type: "input",
        name: "tests",
        message: questions[6],
        default: "Test Instructions",
      },
      {
        type: "input",
        name: "username",
        message: questions[7],
        default: "",
      },
      {
        type: "input",
        name: "email",
        message: questions[8],
        default: "No Email Provided.",
      },
    ])
    .then((response) => {
      const markdown = generateMarkdown(response);
      writeToFile("ReadMe2.md", markdown);
    });
}

// function call to initialize program
init();
