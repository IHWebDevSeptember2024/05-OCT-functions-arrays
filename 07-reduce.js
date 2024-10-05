// REDUCE convierte un array en un solo valor

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

numbers.forEach((number) => {
  sum += number;
});

console.log(sum);

const result = numbers.reduce((dittoaccumulator, dittocurrentValue) => {
  return dittoaccumulator + dittocurrentValue;
});

console.log(result);

const words = ["Hello", "world", "this", "is", "a", "phrase"];
const phrase = words.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
});

console.log(phrase);

const clothes = [
  { item: "T-shirt", price: 20 },
  { item: "Jeans", price: 50 },
  { item: "Jacket", price: 100 },
  { item: "Socks", price: 5 },
  { item: "Hat", price: 15 },
];

const totalPrices = clothes.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);

console.log(totalPrices / clothes.length);
