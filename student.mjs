import Person from './person.mjs';

class Student extends Person{
    studentIdentification = 0;
    constructor(firstname, secondname, gender, studentId){
        super(firstname, secondname, gender)
        this.studentIdentification = studentId;
    }
}

const firstStudent = new Student ("Ore", "Josh", "M", 12)

export default Student;