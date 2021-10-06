const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("intern constructors", () => {
        it("returns the intern's data", () => {
            const intern = new Intern("Bob", "4", "bob@test.com", "Penn State")
            expect(intern.name).toBe("Bob")
            expect(intern.id).toBe("4")
            expect(intern.email).toBe("bob@test.com")
            expect(intern.school).toBe("Penn State")
        })
    })
    describe("methods", () => {
        it("tests intern method", () => {
            const intern = new Intern("Joe", "1", "joe@test.com", "username2")
            expect(intern.getRole()).toBe("Intern")
        })
    })
})