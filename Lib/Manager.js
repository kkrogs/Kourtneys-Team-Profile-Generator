const Employee = require("../Lib/Employee")


// engineer is an extension of the employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.role = "Manager"
    }


    // gets the role of the employee
    getRole() {
        return "Manager"
    }
}


module.exports = Manager;