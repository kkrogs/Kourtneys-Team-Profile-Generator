// create Manager card
const generateManager = function (manager) {
    return `
    <div class="products">
    <section class="card">
      <header><h1>${manager.name}
        </h1> <h3>☕ Manager</h3></header>
        <ul>
        <li>ID: ${manager.id}
        </li>
        <li>Email: <a href="mailto:${manager.email}">${manager.email}</a>
        </li>
        <li>Office Number: ${manager.officeNumber}
<       /li>
      </ul>
    </section>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <section class="card">
                    <header><h1>${engineer.name}</h1> <h3>🛠 Engineer</h3></header>
                    <ul>
                      <li>ID: ${engineer.id}</li>
                      <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                      <li>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                    </ul>
                  </section>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <section class="card">
                    <header><h1>${intern.name}</h1> <h3>🎓 Intern</h3></header>
                    <ul>
                      <li>ID: ${intern.id}</li>
                      <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                      <li>School: ${intern.school}</li>
                    </ul>
                    
                    
                  </section>
    `
};

// push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }

    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Kourtneys Team Profile Generator</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="./style.css"/>
      </head>
      <body>
        <!-- Header -->
        <header>
          <h1>My Team</h1>
        </header>
    
        <!-- Body -->
        <main>
                  ${employeeCards}
                  </section>
                  </div>
               
            
            
                  
                </main>
            
                
              </body>
            
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  
  <html>`;
}

// export to index
module.exports = generateHTML; 