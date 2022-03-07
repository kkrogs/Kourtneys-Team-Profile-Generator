const Intern = require('../Lib/Intern');


// this file is made to test the intern class
describe("Intern class", () => {
    describe("intern's supers working properly", () => {
        it("Should get the correct name", () => {
            const intern = new Intern("John", 1, "test@email.com", "Denver University")
            expect(intern.getName()).toEqual("John")
        })
    })

    describe("intern's school generating correctly", () => {
        it("Should correctly create the school property in the object", () => {
            const intern = new Intern("John", 1, "test@email.com", "Denver University")
            expect(intern.school).toEqual("Denver University")
        })
    })

    describe("getRole method", () => {
        it("Should return intern regardless of how it is called", () => {
            const intern = new Intern("John", 1, "test@email.com", "Denver University")
            expect(intern.role).toEqual("Intern")
            expect(intern.getRole()).toEqual("Intern")
        })
    })
})