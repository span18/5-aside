//code to add names into list-items

(d => {
    let todo = d.getElementById("text");
    let add = d.getElementById("add");
    let list = d.getElementById("list");

    add.addEventListener("click", () => {
        let li = d.createElement("li");
        li.textContent = todo.value;

        li.classList.add("list-group-item");
        todo.value = "";
        list.insertBefore(li, list.firstElementChild);
    })

})(document);

//code to shuffle the list names 
(d => {

let list = d.getElementById("list");
button = d.getElementById("shuffle");
    function shuffleNodes() {
        let nodes = list.children, i = 0;
        nodes = Array.prototype.sort.call(nodes);
        while(i < nodes.length) {
           list.appendChild(nodes[i]);
           ++i;
        }
    }
    button.onclick = shuffleNodes;

})(document);


