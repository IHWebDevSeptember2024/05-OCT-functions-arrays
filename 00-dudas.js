class Viking {
  constructor(vida, strength, name) {
    this.health = vida;
  }
  sayHiToSomeone(userName){
    return `Hi ${userName}`
  }
}

const firstViking = new Viking(200);

console.log(firstViking.sayHiToSomeone("Marta"));