/* A “this” Keyword Primer */

// function
// function myFunction() {
//   console.log('Function:::', this);
// }

// myFunction();

// Object literal
const myObj = {
  myMethod() {
    console.log('Object::::', this);
  }
}
// myObj.myMethod();

// Classes
// class MyClass{
//   MyMethod() {
//     console.log('Class::::', this);
//   }
// }

// const MyInstance = new MyClass();
// MyInstance.MyMethod();

/* Exploring “this” with .call, .apply and .bind */
// continued
function myFunction(...text: string[]) {
  console.log('Function:::', this, text);
}

// myFunction('ABC', 'DEF');
const bindFunction = myFunction.bind(myObj);
// bind will take initial function, bind context to it, then give it a new context on call
bindFunction('ABC', 'DEF');
bindFunction('123','456');
bindFunction('ABC', 'DEF');
myFunction.call(myObj, 'ABC', 'DEF'); // c for call and comma
myFunction.apply(myObj, ['ABC', 'DEF']); // a for apply and array
