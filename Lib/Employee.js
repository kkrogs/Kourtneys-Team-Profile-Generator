// Declares the employee class.
class Employee {
  constructor(name, id, email, role) {
      this.name = name
      this.id = id
      this.email = email
      this.role = role

  }

  // gets employee name
  getName() {
      return this.name
  }

  // gets employee ID
  getId() {
      return this.id
  }

  // gets employee email address
  getEmail() {
      return this.email
  }

  // gets employee role
  getRole() {
      return this.role
  }
}

module.exports = Employee;