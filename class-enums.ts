enum Role {ADMIN, READ_ONLY, AUTHOR}

class Person {
  constructor(name, age, role) {
    this.name = name,
    this.age = age,
    this.role = role
  }

  check() {
    if (this.role === Role.ADMIN) {
      console.log('this is an ADMIN role');
    } else if (this.role === Role.READ_ONLY) {
      console.log('this is a READ_ONLY role');
    } else {
      console.log('this is an AUTHOR role');
    }
  }
}

const person1 = new Person('Joe', 23, Role.ADMIN);
const person2 = new Person('Janet', 23, Role.READ_ONLY);
const person3 = new Person('Jagah', 25, Role.AUTHOR);

person1.check()
person2.check()
person3.check()
