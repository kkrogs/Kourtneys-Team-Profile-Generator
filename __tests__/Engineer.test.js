const Engineer = require('../Lib/Engineer');


// this file is made to test the engineer class
describe("Engineer class", () => {
    describe("engineer's supers working properly", () => {
        it("Should get the correct name", () => {
            const engineer = new Engineer("John", 1, "test@email.com", "JohnDoe")
            expect(engineer.getName()).toEqual("John")
        })
    })

    describe("engineer github generating correctly", () => {
        it("Should correctly create the github property in the object", () => {
            const engineer = new Engineer("John", 1, "test@email.com", "JohnDoe")
            expect(engineer.github).toEqual("JohnDoe")
        })
    })

    describe("getRole method", () => {
        it("Should return employee regardless of how it is called", () => {
            const engineer = new Engineer("John", 1, "test@email.com", "JohnDoe")
            expect(engineer.role).toEqual("Engineer")
            expect(engineer.getRole()).toEqual("Engineer")
        })
    })
})