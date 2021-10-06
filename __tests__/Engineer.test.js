const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("engineer constructors", () => {
        it("returns the engineer's data", () => {
            const engineer = new Engineer("Bob", "4", "bob@test.com", "username")
            expect(engineer.name).toBe("Bob")
            expect(engineer.id).toBe("4")
            expect(engineer.email).toBe("bob@test.com")
            expect(engineer.github).toBe("username")
        })
    })
    describe("methods", () => {
        it("tests engineer method", () => {
            const engineer = new Engineer("Joe", "1", "joe@test.com", "username2")
            expect(engineer.getRole()).toBe("Engineer")
        })
    })
})