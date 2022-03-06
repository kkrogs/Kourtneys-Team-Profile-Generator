// link to page creation
const generateHTML = require('./src/renderHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
let teamArray = []; 

// start of manager prompts 
//If new team member equals manager, go to const addManager


function promptForANewTeamMember() {

    inquirer
    .prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Which team member would you like to add?",
            choices: ['Engineer', 'Intern', 'Manager']
        },
    ])
    .then(data) => {

        if (data.addEmployee === 'Manager') {
            createNewManager()
        } else if (data.addEmployee === 'Engineer') {
            createNewEngineer()
        } else if (data.addEmployee === 'Intern') {
            createNewIntern()
        } 
        else {
            createTeam()
        }
    }
};

function createNewManager() {



}

