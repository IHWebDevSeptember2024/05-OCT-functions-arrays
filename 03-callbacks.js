// CALLBACK es una función que se utiliza como argumento para otra función.

function putShirt() {
  console.log("Putting on the shirt.");
}

function putSocks() {
  console.log("Putting on the socks.");
}

function putPants() {
  console.log("Putting on the pants.");
}

function putShoes() {
  console.log("Putting on the shoes.");
}

function getReadyForWork(ditto1, ditto2, ditto3, ditto4) { // esto son callback functions
  ditto1();
  ditto2();
  ditto3();
  ditto4();
  console.log("I'm ready to go to work!!!");
}

getReadyForWork(putShoes, putSocks, putPants, putShirt);

function putSomething(clothes) {
  console.log(`Put your ${clothes} on`);
}

function general(ditto1, ditto2, ditto3) {
  putSomething(ditto1); // esto no son callback functions porque no son parametros sino que llamamos directamente a la función
  putSomething(ditto2);
  putSomething(ditto3);
}

general("socks", "shirt", "underwear")