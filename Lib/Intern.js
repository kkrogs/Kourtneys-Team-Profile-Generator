var Employee = require("./Employee");

class Intern extends Employee {
    //in the constructor put all properties inherited and ones to add
    constructor(name, id, email, school) {
        //su7per is what we are inheriting. What wse put in there is what we are inheriting
      super(name, id, email);
      this.school = school;
    }
};

// var newEmploy = new Employee("Mike", "2", "me@me.com");
// var newEmploy2 = new Employee("Jennifer", "4", "j@me.com");

// console.log(newEmploy2);