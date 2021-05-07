/* Intersection Types */

// interface Order{
//   id: string;
//   amount: number;
//   currency: string;
// }

// interface Stripe{
//   card: string;
//   cvc: string;
// }

// interface PayPal{
//   email: string;
// }
//  // keeps interfaces separate
// type CheckoutCard = Order & Stripe;
// type CheckoutPayPal = Order & PayPal;

// const order: Order = {
//   id: 'xj28s',
//   amount: 100,
//   currency: 'USD'
// };

// const orderCard: CheckoutCard = {
//   ...order,
//   card: '1000 2000 3000 4000',
//   cvc:'123'
// };

// const orderPayPal: CheckoutPayPal = {
//   ...order,
//   email: 'abc@def.com'
// };

// const assigned = Object.assign({}, order, orderCard);

/* Discriminated (Tagged) Unions */
 // continued

 interface Order{
  id: string;
  amount: number;
  currency: string;
}

interface Stripe{
  type: 'stripe';
  card: string;
  cvc: string;
}

interface PayPal{
  type: 'paypal';
  email: string;
}
 // keeps interfaces separate
type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;

const order: Order = {
  id: 'xj28s',
  amount: 100,
  currency: 'USD'
};

const orderCard: CheckoutCard = {
  ...order,
  type: 'stripe',
  card: '1000 2000 3000 4000',
  cvc:'123'
};

const orderPayPal: CheckoutPayPal = {
  ...order,
  type:'paypal',
  email: 'abc@def.com'
};

type Payload = CheckoutCard | CheckoutPayPal;
function checkout(payload: Payload) {
  if (payload.type === 'stripe') {
    console.log(payload.card, payload.cvc);
  }
  if (payload.type === 'paypal') {
    console.log(payload.email);
  }
}

/* Interfaces vs Type Aliases */
interface Item{
  songs: number;
}
interface Artist extends Item{
  name: string;
}
 
interface Artist{
  getSongs(): number;
}
type Artist2 = { name: string } & Item;

//explore
const newArtist: Artist = {
  name: 'ABC',
  songs: 5,
  getSongs() {
    return this.songs;
  }
}