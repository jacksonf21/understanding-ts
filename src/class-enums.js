"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var Person = /** @class */ (function () {
    function Person(name, age, role) {
        this.name = name,
            this.age = age,
            this.role = role;
    }
    Person.prototype.check = function () {
        if (this.role === Role.ADMIN) {
            console.log('this is an ADMIN role');
        }
        else if (this.role === Role.READ_ONLY) {
            console.log('this is a READ_ONLY role');
        }
        else {
            console.log('this is an AUTHOR role');
        }
    };
    return Person;
}());
var person1 = new Person('Joe', 23, Role.ADMIN);
var person2 = new Person('Janet', 23, Role.READ_ONLY);
var person3 = new Person('Jagah', 25, Role.AUTHOR);
person1.check();
person2.check();
person3.check();
