// Require Employee class
const Employee = require("./employee");

// Manager class extending from Employee class
class Manager extends Employee {
  // Adding office number to manager card
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber);
    this.officeNumber = officeNumber;
  }

  // getOfficeNumber returns manager's office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // getRole returns Manager
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
