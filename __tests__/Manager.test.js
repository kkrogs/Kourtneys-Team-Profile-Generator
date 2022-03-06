const Manager = require('../lib/manager');


// this file is made to test the manager class
describe("Manager class", () => {
    describe("manager supers working properly", () => {
        it("Should get the correct name", () => {
            const manager = new Manager("John", 1, "test@email.com", 4)
            expect(manager.getName()).toEqual("John")
        })
    })

    describe("manager office number working properly", () => {
        it("Should correctly create the office number property in the object", () => {
            const manager = new Manager("John", 1, "test@email.com", 4)
            expect(manager.officeNumber).toBe(4)
        })
    })

    describe("getRole method", () => {
        it("Should return manager regardless of how it is called", () => {
            const manager = new Manager("John", 1, "test@email.com", 4)
            expect(manager.role).toEqual("Manager")
            expect(manager.getRole()).toEqual("Manager")
        })
    })
})