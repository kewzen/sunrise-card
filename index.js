
let number = 0

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    number = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

const rand = () =>{
    getRandomInt(0,11)
    let num = document.getElementById("num")
 num.textContent = number

}