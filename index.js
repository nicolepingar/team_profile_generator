const fs = require('fs');
const inquirer = require('inquirer');
const html = require('./src')
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require("./lib/engineer");

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's office number?",
    },
    {
        type: 'list',
        name: 'new',
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I dont want to add any more team members."]
    }
]
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineers's name?",

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
    },
    {
        type: 'list',
        name: 'new',
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I dont want to add any more team members."]
    }
]
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the intern's school??",
    },
    {
        type: 'list',
        name: 'new',
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I dont want to add any more team members."]
    }
]

function writeToFile(fileName, response) {
    fs.writeFile(fileName, response, (err) =>
    err ? console.error(err) : console.log("Generating your team profile...")
    )
}

function init() {
    console.log("Please build your team.");
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            if (response.new === "Engineer") {
                engineer();
            } else if (response.new === "Intern") {
                intern();
            } else writeToFile("index.html", response)
        })
}
function engineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            if (response.new === "Engineer") {
                engineer();
            } else if (response.new === "Intern") {
                intern();
            } else writeToFile("index.html",response)
        }
        )
}
function intern() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            if (response.new === "Engineer") {
                engineer();
            } else if (response.new === "Intern") {
                intern();
            } else writeToFile("index.html", response)
        }
        )
}
init();