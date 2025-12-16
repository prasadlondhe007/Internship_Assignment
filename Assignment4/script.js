function addTodo() {
    let input = document.getElementById("todoInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    let li = document.createElement("li");
    li.className = "list-group-item";

    // Task text
    let span = document.createElement("span");
    span.innerText = task;

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";

    deleteBtn.onclick = function () {
        li.remove(); // remove()
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("todoList").appendChild(li);

    input.value = "";
}
