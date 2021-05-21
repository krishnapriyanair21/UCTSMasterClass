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

export class Person{
  constructor(private name: string){}
  getName(){
    return this.name;
  }
}