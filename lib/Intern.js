// Require Employee class
const Employee = require("./Employee");

// Intern class extending from Employee class
class Intern extends Employee {
  // Adding school for intern card
  constructor(name, id, email, school) {
    super(name, id, email, school);
    this.school = school;
  }

  //  getSchool returns intern's school
  getSchool() {
    return this.school;
  }

  // getRole returns Intern
  getRole() {
    return "Intern";
  }
}

// Export Intern class
module.exports = Intern;