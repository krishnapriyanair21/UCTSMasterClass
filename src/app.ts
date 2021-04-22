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

const anotherOtherPerson: typeof person = { // different syntax same result
  name: 'name 3',
  age: 3
}
// JavaScript (keep commented)
// typeof person = 'object'

/* "keyof" Index Type Queries */
// continued
type PersonKeys = keyof Person; // name | age
type PersonTypes = Person[PersonKeys];  // pure types
