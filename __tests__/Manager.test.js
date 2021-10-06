const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("manager constructors", () => {
        it("returns the manager's data", () => {
            const manager = new Manager("Bob", "4", "bob@test.com", "1")
            expect(manager.name).toBe("Bob")
            expect(manager.id).toBe("4")
            expect(manager.email).toBe("bob@test.com")
            expect(manager.office).toBe("1")
        })
    })
    describe("methods", () => {
        it("tests manager method", () => {
            const manager = new Manager("Joe", "1", "joe@test.com", "username2")
            expect(manager.getRole()).toBe("Manager")
        })
    })
})