//code for attack and defence attributes and totals
(d => {

defence = document.getElementById("defence-one");
attack = document.getElementById("attack-one");
shuffle = document.getElementById("shuffle");


shuffle.addEventListener("click", () => {
defence.textContent = Math.floor(Math.random() * 26)
attack.textContent = Math.floor(Math.random() * 26)

})

defenceTwo = d.getElementById("defence-two");
attackTwo = d.getElementById("attack-two");
shuffle = d.getElementById("shuffle");


shuffle.addEventListener("click", () => {
defenceTwo.textContent = Math.floor(Math.random() * 26)
attackTwo.textContent = Math.floor(Math.random() * 26)

})

})(document);



