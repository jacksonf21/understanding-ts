class Course {
  name: string;
  courseCode: string | number;
  average: number;
  teacher: string[];

  constructor(name, courseCode, average, teacher) {
    this.name = name;
    this.courseCode = courseCode;
    this.average = average;
    this.teacher = teacher;
  }

  getTeachers():void {
    const teachers = this.teacher;
    teachers.forEach(teacher => {
      console.log(teacher)
    });
  };
}

module.exports = Course;