// import * as _ from "lodash";


// /* Writing Declaration Files */

// _.chunk([1, 2, 3, 4], 2); // [1,2],[3,4]

// /* Augmenting Modules with Declarations */
// _.mixin({
//   log(item:string) {
//     console.log(':::', item);
//   },
// })

// // built ins show up with _. 
// _.log('Hello')

/* Emitting Declaration Files */
export class Foo {
  constructor(public name: string) { }
  bar(age: number) { }
}