function filterNumbers() {
  return this.filter((el) => Number.isInteger(el) && el >= 0);
}
function accum() {
  let result = [];
  this.split("").map((el, ind) => {
    result.push(el.toUpperCase() + el.repeat(ind).toLowerCase());
  });
  return result.join("-");
}

Array.prototype.filterNumbers = filterNumbers;
String.prototype.accum = accum;

function calculateProducts(items) {
    return items.reduce((before, now) => before + (now.price * now.quantity), 0)
}

const products = [
  { name: "Футболка", price: 20, quantity: 2 },
  { name: "Джинсы", price: 50, quantity: 1 },
  { name: "Носки", price: 5, quantity: 10 },
  { name: "Штаны", price: 30, quantity: 1 },
];

// console.log([1, 2, "3", 4, 5.5, -6].filterNumbers());
// console.log("cwAt".accum());
// console.log(calculateProducts(products));
