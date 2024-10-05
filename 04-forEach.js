const clothes = ["shirt", "underwear", "pants", "socks", "shoes"];

const putSomethingOn = (cloth) => {
  console.log(`You put your ${cloth} on`);
};

/* 
LO PODRIAMOS HACER ASÍ pero repetimos código
putSomethingOn(clothes[0])
putSomethingOn(clothes[1])
putSomethingOn(clothes[2])
putSomethingOn(clothes[3]) 
*/

// esto sería lo mismo
clothes.forEach((cloth) => {
  // el foreach siempre recorre todo el array, no necesita return
  // si queremos interrumpir el loop quizá es mejor usar un regular for loop
  console.log(`Te pones ${cloth}`);
});

// clothes.forEach(putSomethingOn); // automáticamente me pone el argumento de cada elemento del array
