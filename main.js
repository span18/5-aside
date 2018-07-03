(d => {
    let text = d.getElementById("store");
    let add = d.getElementById("add");
    let display = d.getElementById("display");
    let list = d.getElementById("list");

    let store = [];

    add.addEventListener("click", () => {
        store.push(text.value);
        text.value = "";
    });

    display.addEventListener("click", () => {
        let fragment = d.createDocumentFragment();
        list.textContent = "";

        store.forEach(string => {
            let li = d.createElement("li");
            li.textContent = string;
            li.classList.add("list-group-item");
            fragment.appendChild(li);
        });

        list.appendChild(fragment);
    });

})(document);
