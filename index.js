const fs = require('fs');
const inquirer = require('inquirer');

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
        options: ["Engineer", "Intern", "I dont want to add any more team members."]
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
        options: ["Engineer", "Intern", "I dont want to add any more team members."]
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
        options: ["Engineer", "Intern", "I dont want to add any more team members."]
    }
]










// function Employee(name, id, email) {
//     this.fullName = name;
//     this.idNum = id
//     this.email = email
//     this.getName()
//     this.getID()
//     this.getEmail()
//     this.getRoll()
// }

// node index.js
//please build your team 
// manager questions
// Which type of team member would you like to add? (engineer, intern, i dont want to add any more team members )