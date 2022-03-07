const Employee = require("../Lib/Employee")


// Declares the engineer class ass an extention of the employee class
class Engineer extends Employee {

    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub
        this.role = "Engineer"
    }


    // gets employees github
    getGithub() {
        return this.gitHub
    }

    // gets employees role
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;