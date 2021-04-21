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
// function myFunction(...text: string[]) {
//   console.log('Function:::', this, text);
// }

// myFunction('ABC', 'DEF');
// const bindFunction = myFunction.bind(myObj);
// // bind will take initial function, bind context to it, then give it a new context on call
// bindFunction('ABC', 'DEF');
// bindFunction('123','456');
// bindFunction('ABC', 'DEF');
// myFunction.call(myObj, 'ABC', 'DEF'); // c for call and comma
// myFunction.apply(myObj, ['ABC', 'DEF']); // a for apply and array

/* Arrow Function and Lexical scope */
// class MyClass2{
//   myMethod() {
//     const foo = 123;
//     console.log('1', this);
//     setTimeout(() => {
//       console.log('2', this); // scope of this statements
//     }, 0); 
//   }
//   foo() {
//     const foo = 456; // different scope than previous foo
//   }
// }
// const MyInstance2 = new MyClass2;
// MyInstance2.myMethod();

/* Typing "this" and "noImplicitThis" */
const elem = document.querySelector('.click');

function handleClick(this: HTMLAnchorElement, event: Event) {
  event.preventDefault();
  console.log(this.className);
}

elem.addEventListener('click', handleClick, false);