/* Function Generics */

class Pizza {
  constructor(private name: string, private price: number) { }
}
class List<T>{
  private list: T[];
  

  addItem(item: T): void{
    this.list.push(item);
  }

  getList(): T[]{
    return this.list;
  }
}


const list = new List<Pizza>();

list.addItem(new Pizza('Pepperoni', 15));
// list.addItem({ coupon: 'pizza25' }); // will error

const pizzas = list.getList();

class Coupon{
  constructor(private name: string){}
}
const anotherList = new List<Coupon>();

anotherList.addItem(new Coupon('PIZA25'));

/* Function Overloads */
// func overloads (order will determine which shows up first)
function reverse(str: string): string; 
function reverse<T>(arr: T[]): T[];
// implementation
function reverse<T>(stringOrArray: string | T[]): string | T[] {
  if (typeof stringOrArray === 'string') {
    return stringOrArray
      .split('') 
      .reverse()
      .join('');
  }
  return stringOrArray.slice().reverse();
}

reverse('Pepperoni');
reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']);