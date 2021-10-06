const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("employee constructors", () => {
        it("returns the employee's data", () => {
            const employee = new Employee("Bob", "4", "bob@test.com")
            expect(employee.name).toBe("Bob")
            expect(employee.id).toBe("4")
            expect(employee.email).toBe("bob@test.com")
        })
    })
    describe("methods", () => {
        it("tests employee method", () => {
            const employee = new Employee("Joe", "1", "joe@test.com")
            expect(employee.getRole()).toBe("Employee")
        })
    })
})