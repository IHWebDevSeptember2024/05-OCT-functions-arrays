const southAfricanCities = [
  "Johannesburg",
  "Cape Town",
  "Durban",
  "Pretoria",
  "Port Elizabeth",
  "Bloemfontein",
  "East London",
  "Nelspruit",
  "Kimberley",
  "Polokwane",
  "Polokwane",
];

// para hacer copias de arrays con ciertas modificaciones usaremos el map
const formatedCities = southAfricanCities.map((city) => {
   return `${city.toLowerCase()}`;
});

console.log(formatedCities);
console.log(southAfricanCities);