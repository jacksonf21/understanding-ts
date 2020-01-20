// interface PersonTwo {
//   name: string;
//   age: number;
  
//   greet(phrase: string): void;
// }

// let user1: PersonTwo;

// user1 = {
//   name: 'joe',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + this.name);
//   }
// };

// user1.greet('hi there i\'m max');

interface Greetable {
  name: string;

  greet(phrase: string): void;
};

class PersonTwo implements Greetable {
  constructor(public name: string) {}
  
  greet(phrase: string) {
    console.log(phrase);
  }
};

let user1 = new PersonTwo('Hello!');