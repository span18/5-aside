(d => {

let play = d.getElementById("play");
let scoreOne = d.getElementById("scoreOne");
let scoreTwo = d.getElementById("scoreTwo"); 
  
play.addEventListener("click", () => {
scoreOne.textContent = Math.floor(Math.random() * 5);
  
scoreTwo.textContent = Math.floor(Math.random() * 5);

})

})(document);