(d => {

defence = document.getElementById("defence-one");
attack = document.getElementById("attack-one");
shuffle = document.getElementById("shuffle");


shuffle.addEventListener("click", () => {
defence.textContent = Math.floor(Math.random() * 26)
attack.textContent = Math.floor(Math.random() * 26)

})

})(document);

(d => {

defenceTwo = document.getElementById("defence-two");
attackTwo = document.getElementById("attack-two");
shuffle = document.getElementById("shuffle");


shuffle.addEventListener("click", () => {
defenceTwo.textContent = Math.floor(Math.random() * 26)
attackTwo.textContent = Math.floor(Math.random() * 26)

})

})(document);



