class Employee {
    constructor(name, id, email, role) {
      this.name = name;
      this.role = role;
      this.id = id;
      this.email = email
    }
  
    getName() {
      return this.name
    }

    getRole() {
      return "Employee"
    }
  
    getID() {
      return this.id
    }
  
    getEmail() {
      return this.email
    }
  }
  
  module.exports = Employee