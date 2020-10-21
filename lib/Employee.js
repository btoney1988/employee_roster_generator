// Employee class
class Employee {
  // Setting basic info for employees
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // getName function returns the employee's name
  getName() {
    return this.name;
  }

  // getId function returns the employee's id
  getId() {
    return this.id;
  }

  // getEmail funciton returns the employee's email
  getEmail() {
    return this.email;
  }

  // getRole funciton returns the employee's role
  getRole() {
    return "Employee";
  }
}

// export Employee class
module.exports = Employee;