const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024,
  startEngine: function () {
    return `${this}`;
  },
  stopEngine() {
    return `${this}`;
  },
  honk: () => {
    console.log(this);
    
  },
};

console.log(car.startEngine()); // Toyota Corolla engine started!
console.log(car.stopEngine()); // Toyota Corolla engine stopped!
car.honk(); // Beep! Beep!
