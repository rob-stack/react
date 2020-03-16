class Student {
    constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community
    }
};

class Bootcamp {
    constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
    }
    registerStudent(studentToRegister) {
        //name, email, community
         const studentsWithEmail = this.students.filter(s => s.email === studentToRegister.email)
         if (studentsWithEmail.length === 0) {
             console.log("Registering" + this.email + "to the Bootcamp" + this.name);
             this.students.push(studentToRegister);
         }  else {
             //someone already has this email
             console.log(studentToRegister.email + "was already taken");
         }
         
    }
};