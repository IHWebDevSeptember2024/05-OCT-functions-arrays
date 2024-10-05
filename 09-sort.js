const numbers = [5, 3, 8, 1, 2, 7, 4, 6, 9, 0, 10, 213, 100];

function compare(a, b) {
  return b - a;
}

numbers.sort((a, b) => b - a);

console.log(numbers);

const strings = [
  "banana",
  "ban",
  "apple",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "@tu",
  "grape",
  "Grape",
  "Èric",
];

strings.sort((a, b) => a.length - b.length);

console.log(strings);

strings.sort();

console.log(strings);

strings.sort((a, b) => {
  const result = a.localeCompare(b, "es", { sensitivity: "base" });
  return result;
});

console.log(strings);
