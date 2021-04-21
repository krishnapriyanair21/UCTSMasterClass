/* A “this” Keyword Primer */

// function
function myFunction() {
  console.log('Function:::', this);
}

myFunction();

// Object literal
const myObj = {
  myMethod() {
    console.log('Object::::', this);
  }
}
myObj.myMethod();
// Classes
class MyClass{
  MyMethod() {
    console.log('Class::::', this);
  }
}

const MyInstance = new MyClass();
MyInstance.MyMethod();