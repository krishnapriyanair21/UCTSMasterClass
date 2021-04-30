/* "Readonly" Mapped Type */
// interface Person{
//   name: string;
//   age: number;
// }

// interface ReadonlyPerson{
//   readonly name: string;
//   readonly age: number;
// }

// const person: Person = {
//   name: 'Todd',
//   age: 27
// }

// type MyReadonly<T> = {
//   readonly [P in keyof T]: T[P]
// }

// function freeze<T>(person: T): Readonly<T>{
//   return Object.freeze(person);
// }

// const newPerson = freeze(person);
// /// newPerson.age = 543; // will not work

/* "Partial" Mapped Type */

// interface Person{
//   name: string;
//   age: number;
// }

// // interface PartialPerson{
// //   name?: string;
// //   age?: number;
// // }

// type MyPartial<T> = { // built into type script with Partial
//   [P in keyof T]?: T[P]
// }

// function updatePerson(person: Person, prop: Partial<Person>) {
//   return { ...person, ...prop };
// }
// const person: Person = {
//   name: 'Todd',
//   age: 27
// }

// updatePerson(person, { name: 'ABC' });

/* “Required” Mapped Type, +/- Modifiers */

interface Person{
  name: string;
  age?: number;
}

type MyRequired<T> = { // built into TS
  // [P in keyof T]?: T[P];
  // [P in keyof T]+?: T[P]; same as previous line
  +readonly [P in keyof T]-?: T[P]; 
}

function printAge(person: Required<Person>) {
  return `${person.name} is ${person.age}`;
}

const person: Required<Person> = {
  name: 'Todd',
  age: 27
}
const age = printAge(person);