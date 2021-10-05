const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, id, email, office, role) {
        super(name, id, email)
        this.office = office;
        this.role = "Manager"

    }
    getOfficeNumber() {
        return this.office;
    }
    getRole () {
        return "Manager";
    }
}

module.exports = Manager