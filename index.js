const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is the title of your application?",
    "Please provide a description of your application.",
    "What are the installation instructions?",
    "Please describe how the user should use your application.",
    "What are the contribution guidelines?",
    "What test instructions would you like to give?",
    "Which license would you like to choose?",
    "What is your GitHub username?",
    "What is your email?"
];

// function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, function(error){
        if(error) throw error;
    });
}

// function to initialize program
function init() {

    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0],
            default: "Title",

        }
    ]).then((response) => {
        const markdown = generateMarkdown(response);
        writeToFile("ReadMe2.md", markdown);
    });
    // Once you get the answers, you call generateMarkdown with require, pass in the object
}

// function call to initialize program
init();
