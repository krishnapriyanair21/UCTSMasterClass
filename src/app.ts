/* “typeof” Type Queries */
typeof ''; // string
typeof []; // object

const person = {
  name: 'Todd',
  age :27
}
type Person = typeof person;

const anotherPerson: Person = {
  name: 'John',
  age: 30
}

const anotherOtherPerson: typeof person = {
  name: 'name 3',
  age: 3
}
// JavaScript
// typeof person = 'object'