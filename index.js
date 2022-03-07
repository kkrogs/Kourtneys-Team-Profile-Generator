// This is where the generated HTML file will go
const generateHTML = require('./src/renderHTML');

// team information
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// packages 
const fs = require('fs'); 
const inquirer = require('inquirer');

// array for team
const teamArray = []; 

// manager questions
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager on the team?', 
            
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
           
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number",
      
        }
    ])
    //taking all of the manager's parameters and creating a manager input. From there, creating a new Manager const which will take in the name, id, email, office number params
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);
    //pushing the teamarray to new manager const    
        teamArray.push(manager); 
        console.log(manager); 
    })
};

const createEmployee = () => {
    console.log(`
    //creating new employees
    `);
//New employee questions
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is your new employee's role?",
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your new employee's name?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your new employee's ID?",
           
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your new employee's email?",
           
        },
        {
            type: 'input',
            name: 'github',
            message: "If you have added an engineer on your team, please provide their Github account name. If not, please type no.",
        
        },
        {
            type: 'input',
            name: 'school',
            message: "If you have added an intern, please add the school name here. If not, please type no.",
          
        }, {
            type: 'confirm',
            name: 'addEmployeeQuestion',
            message: 'Would you like to add more employees?',

        }
    ])
    .then(employeeParams => {
        // params collected for employee types 

        let { name, id, email, role, github, school, addEmployeeQuestion } = employeeParams; 
        let employee; 
        //if the engineer role is chosen, then make engineer = new Engineer taking into account name, id, email, github params from question prompts
        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 
        //if the user would like to add more employees, ask the employee information questions from confirmAddEmployee and then push it up to the teamArray
        if (addEmployeeQuestion) {
            return createEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};






// function to create HTML in the dist folder based on above data.
const writeFile = data => {
    fs.writeFile('./Dist/index.html', data, err => {
        // if there is an error, console log it
        if (err) {
            console.log(err);
            return;
        // if there is not an error creating the HTML file, tell the user that the HTML file is located in the Dist folder
        } else {
            console.log("Your team website has been created, please go to the index.html file located in the Dist folder for final results.")
        }
    })
}; 
//calling the addmanager function, then creating an employee and teamarray
addManager()
  .then(createEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  //writing the html page
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  //if the html file fails to be written, console log the error
  .catch(err => {
 console.log(err);
  });