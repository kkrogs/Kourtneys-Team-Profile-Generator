const fs = require("fs");
const inquirer = require("inquirer");
var Employee = require("./Lib/Employee");
//can export intern file and more. We will not need it for employee just for intern, manager, engineer.


// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input

//Who is ht emanager
//what type of employee do you want to make: manager, employee, intern. or you can say I am done
//based on if it shows engineer, you will ask what the engieners name, id, email on github
// If they choose intern, say what it the intern's name, ID, email, school
//once the user answers the quewstions, then I create a new object with their answers as the properties

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the entire teams general manager? Note this will appear as the title as example "Johns(name given from this question) Team"',
            name: 'generalManager',
          },
            {
              type: 'input',
              message: 'What is the team managers name?',
              name: 'managerName',
            },
            {
              type: 'input',
              message: 'What is the managers ID?',
              name: 'managerId',
            },
            {
              type: 'input',
              name: 'managerEmail',
              message: 'What is the managers email?',
              
          },  
            {
              type: 'input',
              message: 'What is the managers office number?',
              name: 'managerOffice',
            },
          ])

          


        //end of prompt
        .then(function(response) {
          console.log(response);
          endofCode();
  
          const htmlTemplate =  
          
          
          `<!DOCTYPE html>
          <html>
            <head>
              <title>Kourtneys Team Profile Generator</title>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="stylesheet" type="text/css" href="./assets/style.css" />
            </head>
            <body>
              <!-- Header -->
              <header>
                <h1>${response.generalManager}'s Team</h1>
                <p>
                  When you change the screen size, the layout will change so you can view
                  the page comfortably no matter how small the screen gets!
                </p>
              </header>
          
              
          
              <!-- Body -->
              <main>
                
                <!-- Product Cards -->
                <div class="products">
                  <section class="card">
                    <header><h1>${response.managerName}</h1> <h3>Manager</h3></header>
                    <ul>
                      <li>ID:</li>
                      <li>Email:</li>
                      <li>GitHub:</li>
                    </ul>
                  </section>
                  <section class="card">
                    <header><h1>${response.engineer1Name}</h1> <h3>Engineer</h3></header>
                    <ul>
                      <li>ID:</li>
                      <li>Email:</li>
                      <li>GitHub:</li>
                    </ul>
                  </section>
                  <section class="card">
                    <header><h1>${response.username}</h1> <h3>Engineer</h3></header>
                    <ul>
                      <li>ID:</li>
                      <li>Email:</li>
                      <li>GitHub:</li>
                    </ul>
                  </section>
                  <section class="card">
                    <header><h1>${response.engineer1Github}</h1> <h3>Engineer</h3></header>
                    <ul>
                      <li>ID:</li>
                      <li>Email:</li>
                      <li>GitHub:</li>
                    </ul>
                    
                    
                  </section>
                  <section class="card">
                    <header><h1>Wooden Spoons</h1> <h3>Intern</h3></header>
                    <ul>
                      <li>ID:</li>
                      <li>Email:</li>
                      <li>GitHub:</li>
                    </ul>
                    
                    
                  </section>
                </div>
             
          
          
                
              </main>
          
              
            </body>
          </html>`;
  
      // TODO: Add comments to explain each of the three arguments of appendFile()
      // the name of the file, what we're appending on the file (user input from the terminal, and a )
      fs.writeFile('index.html', htmlTemplate, (err) =>
      // TODO: Describe how this ternary operator works
      err ? console.error(err) : console.log('Commit logged!')
      
        )});
        //step 1: Create 3 additional functions. Next function to create is going to be a menu. After they choose who their manager is, they will come back to this. Crossroads
function endofCode(params) {
  inquirer 
  .prompt
  ([{
    type: 'list',
    name: 'addToTeam',
    message: 'end',
    choices: [
      'Done adding to the team',
      'Continue',
    ]


  }
  ])
  .then(function(response) {
    console.log(response)
    engineerA(); //inside of this, I need to branch off to another inquirer prompt. At the other inquirer prompts, add the endofCode prompt so they can work on differert people.
    // engineerB();
    // engineerC();
    // intern();

  } )};

        
function engineerA(params) {
  inquirer 
  .prompt
  ([{
    type: 'input',
    name: 'engineer1Name',
    message: 'What is the first engineers name?',
  
  },{
    type: 'input',
    name: 'engineer1Id',
    message: 'What is the first engineers ID?',
    
  }, {
    type: 'input',
    message: 'What is the first engineers email?',
    name: 'engineer1Email',
  }, {
    type: 'input',
    message: 'What is the first engineers github username?',
    name: 'engineer1Github',
  }
])
  .then(function(response) {
    console.log(response)
    endofCode(); 

  
  } )};

  function engineerB(params) {
    inquirer 
    .prompt
    ([{
      type: 'input',
      name: 'engineer2Name',
      message: 'What is the second engineers name?',
    
    },{
      type: 'input',
      name: 'engineer2Id',
      message: 'What is the second engineers ID?',
      
    },{
      type: 'input',
      message: 'What is the second engineers email?',
      name: 'engineer2Email',
    }, {
      type: 'input',
      message: 'What is the second engineers github username?',
      name: 'engineer2Github',
    }
  ])
    .then(function(response) {
      console.log(response)
      endofCode(); 
  
    
    } )};

  function engineerC(params) {
    inquirer 
    .prompt
    ([{
      type: 'input',
      name: 'engineer3Name',
      message: 'What is the third engineers name?',
      
    },{
      type: 'input',
      name: 'engineer3Id',
      message: 'What is the third engineers ID?',
      
    }, {
      type: 'input',
      message: 'What is the third engineers email?',
      name: 'engineer3Email',
    }, {
      type: 'input',
      message: 'What is the third engineers github username?',
      name: 'engineer3Github',
    }
  ])
    .then(function(response) {
      console.log(response)
      endofCode(); 
    
      
    } )};

  function intern(params) {
    inquirer 
    .prompt
    ([{
      type: 'input',
      name: 'internName',
      message: 'What is the interns name?',
        
    },{
      type: 'input',
      name: 'internId',
      message: 'What is the interns ID?',
      
    }, {
      type: 'input',
      message: 'What is the interns email?',
      name: 'internEmail',
    }, {
      type: 'input',
      message: 'What is the interns school?',
      name: 'internSchool',
    }
  ])
    .then(function(response) {
      console.log(response)
      endofCode(); 
      
        
    } )};
  


 

    
         //we will have 3 different inquirer prompts, it is best to put them into functions. This is where the first inquirer questions go. Then we go into the .then(calls another function).
          // {
          //   type: 'input',
          //   message: 'What is the first engineers name?',
          //   name: 'engineer1',
          // },
          // {
          //   type: 'input',
          //   message: 'What is engineer1s github URL',
          //   name: 'github',
          // },


  //create a new function at the bottom of my code that when called, will fire off a new require prompt altogether