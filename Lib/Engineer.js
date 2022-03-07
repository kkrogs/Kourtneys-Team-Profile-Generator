const Employee = require("../Lib/Employee")


// Declares the engineer class ass an extention of the employee class
class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
        this.role = "Engineer"
    }


    // gets employees github
    getGithub() {
        return this.github
    }

    // gets employees role
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;