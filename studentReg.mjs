import Academy from './academic.mjs';

class StudentRegistration extends Academy{
    studentRegId = "";
    Faculty = "";
    Department = "";
    constructor(academySemester, academyYear, studentRegIdentification, studentFaculty, studentDepartment){
        super(academySemester, academyYear)
        this.studentRegId = studentRegIdentification;
        this.Faculty = studentFaculty;
        this.Department = studentDepartment;
    }
}

export default StudentRegistration;