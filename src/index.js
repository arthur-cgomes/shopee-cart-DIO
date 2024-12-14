import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];
const myWhistList = [];

console.log('Welcome to the your Shopee Cart!');

const item1 = await createItem('MacBook Air M2', 9.999, 1);
const item2 = await createItem('iPhone 13 Pro Max', 4.999, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.displayCart(myCart);

//await cartService.deleteItem(myCart, item2.name);

await cartService.calculateTotal(myCart);
