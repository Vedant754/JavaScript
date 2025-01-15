const student = {// Whenever a obj is created a by default obj prototype is also created for that obj

    fullName: "Vedant Bhagwat",
    cgpa: 8.48,

    printMarks: function(){
        console.log("cgpa = ", this.cgpa); // "this" keyword represents the current obj i.e student
    },


    printMarks1(){ // easy format of representing a function inside a object
        console.log("cgpa = ", this.cgpa);
    },
};

/*--------------------------------------------------------------------------------------------------- */

const employee = {
    calTax(){
        console.log("Your tax is 10%");
    }
}

const emp1 = {
    salary: 63000,
}
// Inorder to get the access of calTax func in emp1 we do prototyping using following syntax 
emp1.__proto__ = employee;