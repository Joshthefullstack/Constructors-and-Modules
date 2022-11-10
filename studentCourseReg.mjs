import StudentRegistration from "./studentReg.mjs";
import Course from './courses.mjs';

const Mathematics = new Course(1, "MTH 111", "Maths", 1, "Mr. Akerele", 0);
const English = new Course(2, "ENG 111", "English", 1, "Mr. Seyi", 1);

let array = [Mathematics, English]

let valuesOfMathsObject = Object.values(Mathematics);
let valuesOfEngObject = Object.values(English)

class StudentCourseReg extends StudentRegistration{
    Maths = Mathematics;
    Eng = English;
    subjectArray = array;
    constructor(subjectArray, Mathematics, English){
        super(Mathematics, English)
    }
    totalCourse(totalNumberOfCourses){
        totalNumberOfCourses = this.subjectArray.length;
        console.log(totalNumberOfCourses);
    }
    totalCompulsory(compulsoryCourses){
        let compulsoryMaths = valuesOfMathsObject[valuesOfMathsObject.length -3]
        let compulsoryEng = valuesOfEngObject[valuesOfEngObject.length -3]
        console.log(compulsoryMaths);
        console.log(compulsoryEng);
        if(compulsoryEng > 0 || compulsoryMaths > 0){
            compulsoryCourses++
        }
        console.log(compulsoryCourses);
    }
    totalElectives(compulsoryElective){
        let compulsoryElectMaths = valuesOfMathsObject[valuesOfMathsObject.length -1]
        let compulsoryElectEng = valuesOfEngObject[valuesOfEngObject.length -1]

        if(compulsoryElectMaths > 0 || compulsoryElectEng > 0){
            compulsoryElective++
        }
        console.log(compulsoryElective);
    }
}


const firstStudent = new StudentCourseReg;

export default StudentCourseReg;