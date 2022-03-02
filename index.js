const fs = require("fs");
const inquirer = require("inquirer");


// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
          },
          {
            type: 'input',
            message: 'What is your exact gps coordinates, do NOT lie',
            name: 'location',
          },
          {
            type: 'input',
            message: 'Tell me what your stomach contents are?',
            name: 'eat',
          },
          {
            type: 'input',
            message: 'Do you know George? He is the best.',
            name: 'george',
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
            <title>Kourtney's Team Profile Generator</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" type="text/css" href="./assets/style.css" />
          </head>
          <body>
            <!-- Header -->
            <header>
              <h1>Kourtney's Team Profile Generator</h1>
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
                  <header><h1>${response.username}</h1> <h3>Manager</h3></header>
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