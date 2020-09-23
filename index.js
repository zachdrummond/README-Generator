const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the title of your application?",
  "Please provide a description of your application.",
  "What are the installation instructions?",
  "Please describe how the user should use your application.",
  "Which license would you like to choose?",
  "What are the contribution guidelines?",
  "What test instructions would you like to give?",
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
        default: "Title",
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
        default: "Description",
      },
      {
        type: "input",
        name: "installation",
        message: questions[2],
        default: "Installation",
      },
      {
        type: "input",
        name: "usage",
        message: questions[3],
        default: "Usage",
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
        default: "Contributing",
      },
      {
        type: "input",
        name: "tests",
        message: questions[6],
        default: "Tests",
      },
      {
        type: "input",
        name: "username",
        message: questions[7],
        default: "username",
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
