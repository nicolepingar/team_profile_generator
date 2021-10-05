const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/html.js');
const Employee = require('./lib/employee')
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require("./lib/engineer");
const emptyArray = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter a name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID?",
        validate: input => {
            if (isNaN(input) || !input) {
                console.log ("Please enter an ID number.");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter an email.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the manager's office number?",
        validate: input => {
            if (isNaN(input) || !input) {
                console.log ("Please enter an office number.");
                return false;
            } else {
                return true;
            }
        }
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
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter a name.");
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID?",
        validate: input => {
            if (isNaN(input) || !input) {
                console.log ("Please enter an ID number.");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter an email.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter a username.");
                return false;
            }
        }
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
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter a name.");
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID?",
        validate: input => {
            if (isNaN(input) || !input) {
                console.log ("Please enter an ID number.");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter an email.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter a school.");
                return false;
            }
        }
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
function endQuestions(emptyArray) {
    writeToFile("./dist/index.html", generateHTML(emptyArray))
}

function init() {
    console.log("Please build your team.");
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            const { name, id, email, office } = response
            const manager = new Manager (name, id, email, office);
            emptyArray.push(manager);

            if (response.new === "Engineer") {
                engineer();
            } else if (response.new === "Intern") {
                intern();
            } else {endQuestions()}
            
        })
    
}
function engineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            const { name, id, email, github } = response
            const engineer = new Engineer (name, id, email, github)
            emptyArray.push(engineer);

            if (response.new === "Engineer") {
                engineer();
            } else if (response.new === "Intern") {
                intern();
            } else {endQuestions()}
        })
      

}
function intern() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            const { name, id, email, school } = response
            const intern = new Intern (name, id, email, school)
            emptyArray.push(intern)


            if (response.new === "Engineer") {
                engineer();
            } else if (response.new === "Intern") {
                intern();
            } else {endQuestions()}
        })
}
init();