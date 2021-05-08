// console.log("hello");
var randomNumber1 = Math.random()*6 + 1;
randomNumber1 = Math.floor(randomNumber1);
var randomNumber2 = Math.random()*6 + 1;
randomNumber2 = Math.floor(randomNumber2);
// console.log(randomNumber1);
// console.log(randomNumber2);
var randomImgSource1 = "images/dice" + randomNumber1 + ".png";
var randomImgSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".dice1 img").setAttribute("src",randomImgSource1);
document.querySelector(".dice2 img").setAttribute("src",randomImgSource2);
//***********************My Try******************************************//

//if (randomNumber1 === 1) {
//    document.querySelector(".dice1 img").setAttribute("src","images/dice1.png");
// }
// if (randomNumber1 === 2) {
//   document.querySelector(".dice1 img").setAttribute("src","images/dice2.png");
// }
// if (randomNumber1 === 3) {
//      document.querySelector(".dice1 img").setAttribute("src","images/dice3.png");
// }
// if (randomNumber1 === 4) {
//       document.querySelector(".dice1 img").setAttribute("src","images/dice4.png");
// }
// if (randomNumber1 === 5) {
//        document.querySelector(".dice1 img").setAttribute("src","images/dice5.png");
// }
// if (randomNumber1 === 6) {
//       document.querySelector(".dice1 img").setAttribute("src","images/dice6.png");
// }
// if (randomNumber2 === 1) {
//    document.querySelector(".dice2 img").setAttribute("src","images/dice1.png");
// }
// if (randomNumber2 === 2) {
//   document.querySelector(".dice2 img").setAttribute("src","images/dice2.png");
// }
// if (randomNumber2 === 3) {
//      document.querySelector(".dice2 img").setAttribute("src","images/dice3.png");
// }
// if (randomNumber2 === 4) {
//       document.querySelector(".dice2 img").setAttribute("src","images/dice4.png");
// }
// if (randomNumber2 === 5) {
//        document.querySelector(".dice2 img").setAttribute("src","images/dice5.png");
// }
// if (randomNumber2 === 6) {
//       document.querySelector(".dice2 img").setAttribute("src","images/dice6.png");
// }
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1 a").innerText = "Player1 Wins!";
}
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1 a").innerText = "Player2 Wins!";
}
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1 a").innerText = "Draw";
}
