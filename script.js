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
	  study() {
    console.log(`${this._name} is studying.`);
  }
}

class Teacher extends Person {
	  teach() {
    console.log("Alice is teaching.");
  }
}

const person = new Person("John Doe", 30);
console.log(person.name); // Output: John Doe
person.age = 35;

const student = new Student("Alice Smith", 20);
student.study(); // Output: Alice Smith is studying.

const teacher = new Teacher("Mr. Johnson", 45);
teacher.teach(); // Output: Mr. Johnson is teaching.

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
