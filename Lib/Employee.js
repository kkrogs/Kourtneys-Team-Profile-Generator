class Employee {
    //constructor is what initializes the class
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    } 

    // Method
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }


  }

  module.exports = Employee





// const Employee = require('./Employee')

// class Intern extends Employee {
//     constructor(id, name, email, school){
//         super(id, name, email)
//         this.school = school
//     }

//     getSchool() {
//         return this.school
//     };
    
//     getRole() {
//         return 'Intern'
//     };
// };

// module.exports = Intern;











// class Employee {
//     //constructor is what initializes the class
//     constructor(name, id, email) {
//       this.name = name;
//       this.id = id;
//       this.email = email;
//     } 

//     // Method
//   getName() {
//     return this.name;
//   }
//   getId() {
//     return this.id;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getRole() {
//     return "Employee";
//   }


//   }

//   module.exports = Employee