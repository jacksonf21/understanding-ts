var Course = /** @class */ (function () {
    function Course(name, courseCode, average, teacher) {
        this.name = name;
        this.courseCode = courseCode;
        this.average = average;
        this.teacher = teacher;
    }
    Course.prototype.getTeachers = function () {
        var teachers = this.teacher;
        teachers.forEach(function (teacher) {
            console.log(teacher);
        });
    };
    ;
    return Course;
}());
module.exports = Course;
