title = document.getElementById("title");
defence = document.getElementById("defence");
attack = document.getElementById("attack");
skills = document.getElementById("skills");


skills.addEventListener("click", () => {
defence.textContent = Math.floor(Math.random() * 26)
attack.textContent = Math.floor(Math.random() * 26)

});