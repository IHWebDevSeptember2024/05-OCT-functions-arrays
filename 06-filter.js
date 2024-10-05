const nbaPlayers1990 = [
    "Michael Jordan",
    "Magic Johnson",
    "Larry Bird",
    "Hakeem Olajuwon",
    "Charles Barkley",
    "Karl Malone",
    "Patrick Ewing",
    "David Robinson",
    "John Stockton",
    "Scottie Pippen"
];

console.log(nbaPlayers1990);

const filteredPlayers = nbaPlayers1990.filter((player)=>{
    return player !== "Scottie Pippen"
})

console.log(filteredPlayers);


const nbaPlayers1990WithAge = [
    { name: "Michael Jordan", age: 27 },
    { name: "Magic Johnson", age: 31 },
    { name: "Larry Bird", age: 34 },
    { name: "Hakeem Olajuwon", age: 27 },
    { name: "Charles Barkley", age: 27 },
    { name: "Karl Malone", age: 27 },
    { name: "Patrick Ewing", age: 28 },
    { name: "David Robinson", age: 25 },
    { name: "John Stockton", age: 28 },
    { name: "Scottie Pippen", age: 25 }
];


const playersWithLessThan30 = nbaPlayers1990WithAge.filter((player)=>{
    return player.age < 30;
})

console.log(playersWithLessThan30);
