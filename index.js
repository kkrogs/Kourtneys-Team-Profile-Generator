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
            name: 'managerEmail'
        },  
          {
            type: 'input',
            message: 'What is the managers office number?',
            name: 'managerOffice',
          },
          {
            type: 'input',
            message: 'Whats your Linked in URL',
            name: 'linkedin',
          },
          {
            type: 'input',
            message: 'Whats your github URL',
            name: 'github',
          },
    ])
    .then(function(response) {
        console.log(response);

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
              <h1>${response.name}'s Team</h1>
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
                  <header><h1>${response.engineer}</h1> <h3>Manager</h3></header>
                  <ul>
                    <li>ID:</li>
                    <li>Email:</li>
                    <li>GitHub:</li>
                  </ul>
                </section>
                <section class="card">
                  <header><h1>${response.intern}</h1> <h3>Engineer</h3></header>
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
                  <header><h1>${response.username}</h1> <h3>Engineer</h3></header>
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
    );
      }
      );