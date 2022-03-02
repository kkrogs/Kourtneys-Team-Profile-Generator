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

        const htmlTemplate =  `<!DOCTYPE html> \n
        <html lang="en"> \n
        <head> \n
            <meta charset="UTF-8"> \n
            <meta http-equiv="X-UA-Compatible" content="IE=edge"> \n
            <meta name="viewport" content="width=device-width, initial-scale=1.0"> \n
            <title>Document</title> \n
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> \n
        </head> \n
        <body> \n
        <ul> \n
            <li>Name: ${response.username}</li> \n
            <li>Location: ${response.location}</li> \n
            <li>Stomach Contents: ${response.eat}</li> \n
            <li>Do you know George? ${response.george}</li> \n
            <li>LinkIn Url: ${response.linkedin}</li> \n
            <li>GitHub Url: ${response.github}</li> \n
        </ul> \n
        </body> \n
        </html>`;

    // TODO: Add comments to explain each of the three arguments of appendFile()
    // the name of the file, what we're appending on the file (user input from the terminal, and a )
    fs.writeFile('index.html', htmlTemplate, (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('Commit logged!')
    );
      }
      );