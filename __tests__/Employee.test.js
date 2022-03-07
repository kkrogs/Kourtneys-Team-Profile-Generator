const Employee = require('../Lib/Employee');


// this file is made to test the employee class
describe("Employee class", () => {
    describe("getName method", () => {
        it("Should return the name of this employee", () => {
            const employee = new Employee("John", 1, "test@email.com", "manager")
            expect(employee.getName()).toEqual("John")
        })
    })

    describe("getID method", () => {
        it("Should return the id of this employee", () => {
            const employee = new Employee("John", 1, "test@email.com", "manager")
            expect(employee.getId()).toEqual(1)
        })
    })

    describe("getEmail method", () => {
        it("Should return the email of this employee", () => {
            const employee = new Employee("John", 1, "test@email.com", "manager")
            expect(employee.getEmail()).toEqual("test@email.com")
        })
    })

    describe("getRole method", () => {
        it("Should return the role of this employee", () => {
            const employee = new Employee("John", 1, "test@email.com", "manager")
            expect(employee.getRole()).toEqual("manager")
        })
    })
})