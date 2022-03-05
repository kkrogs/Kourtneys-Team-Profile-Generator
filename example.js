// decraing the files the we are going to use
const fs = require('fs')
const inquirer = require('inquirer');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const renderHTML = require('./src/renderHTML')

// declaring the variable teamMembers. This will be an array of each team member object
let teamMembers = []

// readme

// video


// the buildTeam funcion will be called on init. It is designed to take the user's input and create a manager object
function buildTeam() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the team manager's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the team manager's id?",
                name: 'Id',
            },
            {
                type: 'input',
                message: "What is the team manager's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the team manager's office number?",
                name: 'officeNumber',
            },
        ])
        .then((data) => {

            // this creates the manager object and pushes it to the team member array
            const employee = new Manager(data.name, data.Id, data.email, data.officeNumber)
            teamMembers.push(employee)

            // this prompts the user if they want to build a new team member object or not
            promptForANewTeamMember()
        });
}

// this function prompts the user if they want to build a new team member object or not
function promptForANewTeamMember() {

    inquirer
        .prompt([
            {
                type: 'list',
                message: "Which type of team member would you like to add?",
                name: 'addEmployee',
                choices: ["Add an engineer", "Add an intern", "I don't want to add any more team members"]
            },
        ])
        .then((data) => {

            // this takes the users input to determine what they want to do. It will either build a new engineer, build a new intern, or compile the team's html.
            if (data.addEmployee === "Add an engineer") {
                buildNewEngineer()
            } else if (data.addEmployee === "Add an intern") {
                buildNewIntern()
            } else {
                compileTeam()
            }
        });
}

// this function is used to build a new engineer object based on the users input.
function buildNewEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your engineer's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is your engineer's id?",
                name: 'Id',
            },
            {
                type: 'input',
                message: "What is your engineer's email address?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is your engineer's GitHub username?",
                name: 'gitHub',
            },
        ])
        .then((data) => {

            // this creates a new engineer object and pushes it to the teamMembers array
            const employee = new Engineer(data.name, data.Id, data.email, data.gitHub)
            teamMembers.push(employee)

            // this prompts the user if they want to build a new team member object or not
            promptForANewTeamMember()
        });
}

// this function is used to build a new intern object based on the users input.
function buildNewIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your intern's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is your intern's id?",
                name: 'Id',
            },
            {
                type: 'input',
                message: "What is your intern's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is your intern's school?",
                name: 'school',
            },
        ])
        .then((data) => {

            // this creates a new intern object and pushes it to the teamMembers array
            const employee = new Intern(data.name, data.Id, data.email, data.school)
            teamMembers.push(employee)

            // this prompts the user if they want to build a new team member object or not
            promptForANewTeamMember()
        });
}


// this function takes the input and builds the html file based on the users team
function compileTeam() {

    const newPage = new renderHTML;

    fs.writeFile("./dist/index.html", (newPage.renderHTMLPage(teamMembers)), (err) =>
        err ? console.log(err) : console.log("Your team html file can be found in the dist folder")
    );
}


// calls the buildTeam fuction when the program is loaded.
buildTeam()