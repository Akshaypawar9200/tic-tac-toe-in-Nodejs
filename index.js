const Game = require("./Game");

let[g1, msg1] = Game.newGame("Akshay", "Om");

// Draw

// console.log(g1.play(0));
// console.log(g1.play(1));
// console.log(g1.play(2));
// console.log(g1.play(4));
// console.log(g1.play(5));
// console.log(g1.play(3));
// console.log(g1.play(6));
// console.log(g1.play(8));
// console.log(g1.play(7));


//  O Winner
console.log(g1.play(5));
console.log(g1.play(1));
console.log(g1.play(8));
console.log(g1.play(0));
console.log(g1.play(4));
console.log(g1.play(2));

// X Winner
// console.log(g1.play(0));
// console.log(g1.play(1));
// console.log(g1.play(4));
// console.log(g1.play(2));
// console.log(g1.play(8));
// console.log(g1.play(3));
