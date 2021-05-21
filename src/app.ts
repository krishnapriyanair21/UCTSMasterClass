/* Include, Exclude and Files properties */

// all code in tsconfig
// precedent is files -> include -> exclude

/* Configuration Inheritance with Extends */
//inherit from a different tsconfig file
// change tsconfig to tsconfig-base
// function log(message: string) { }


/* Output Locations, Tweaks and Emitting On Error */
//outDir
//outFile
// console.log('app')

// /* Emitting Source Maps */
// class Person{
//   name:string = "Krishna"
// }

/* Transpiling and Experimental Features */

// export class Person{
//   constructor(private name: string){}
//   getName(){
//     return this.name;
//   }
// }

/* Understanding “lib” and ES libraries */
// Array.from(document.querySelectorAll('*'));

/* Strict Flags for Enhanced Safety */

/* CLI Output Tweaks */
// const names: string = 123; // test error messages

/* Enforcing Code Quality */

/* Performance Bundling and tslib */
export class App { }

// npm i tslib 