// Require Employee class
const Employee = require("./Employee");

// Engineer class extending from Employee class
class Engineer extends Employee {
  // Adding github for the engineer card
  constructor(name, id, email, github) {
    super(name, id, email, github);
    this.github = github;
  }

  // getGithub function returns employee's github account
  getGithub() {
    return this.github;
  }

  // getRole returning Engineer
  getRole() {
    return "Engineer";
  }
}

// export Engineer class
module.exports = Engineer;