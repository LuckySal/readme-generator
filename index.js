// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a brief description of the project",
        name: "description"
    },
    {
        type: "input",
        message: "How does someone install the project?",
        name: "install"
    },
    {
        type: "input",
        message: "What are the directions for using the project?",
        name: "usage"
    },
    {
        type: "input",
        message: "How does someone contribute to the project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "How does someone run tests for the project?",
        name: "test"
    },
    {
        type: "list",
        message: "Which license will the project use?",
        name: "license",
        choices: ["MIT License", "Apache License 2.0", "BSD License", "GPL License", "Mozilla Public License 2.0"]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./readme-files/${fileName}`, data);
    console.log(`Created file ${fileName} successfully.`);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            let content = generateMarkdown(answers);
            let filename = "README.md";
            let isDuplicateFile;
            let i = 1;
            do {
                try {
                    fs.accessSync(`./readme-files/${filename}`, fs.constants.F_OK);
                    isDuplicateFile = true;
                    filename = `README(${i++}).md`;
                  } catch (err) {
                    isDuplicateFile = false;
                  }
            } while (isDuplicateFile);
            writeToFile(filename, content);
        })
        .catch((error) => {
            console.error(error.message);
        })
}

// Function call to initialize app
init();
