const animals = [
  "dog",
  "cat",
  "elephant",
  "tiger",
  "lion",
  "giraffe",
  "zebra",
  "monkey",
  "panda",
  "kangaroo",
];

// animals.reverse(); // OJITO CON ESTO! Modifica el array inicial.

const copyOfAnimals = animals.map((animal) => animal); // el return está implícito cuando lo hacemos en una linea
copyOfAnimals.reverse();

console.log(copyOfAnimals);
console.log(animals);