//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
	constructor(name,age){
		supper(name,age);
	}
  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}
const student = win.Student;
 const student = new Student("Alish", 30);
console.log(Student);
student.study();
const teacher = win.Teacher;
const teacher = new Teacher("John", 30);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
