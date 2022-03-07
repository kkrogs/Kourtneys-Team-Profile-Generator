const Employee = require("../Lib/Employee")

// Declares the intern class ass an extention of the employee class
class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
        this.role = "Intern"
    }

    // Gets the intern's school
    getSchool() {
        return this.school
    }

    // get's intern's role
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;




