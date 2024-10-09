const API_URL = 'http://localhost:3001/todos';




// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
  
});

// Fetch todos from backend
async function fetchTodos() {
    const response = await axios.get(API_URL);
    const ref = document.getElementById("toadded");
    for (let i = 0; i < response.data.todo.length; i++){
        const words = response.data.todo[i].todo;
        const ref = document.getElementById("toadded");

        const div = document.createElement("div");
        const span = document.createElement("span");

            div.className = "todo";
            span.className = "todo-text";
            span.innerHTML = words;

            const tick = document.createElement("input");
            tick.type = "checkbox";
            tick.className = "box";

            tick.addEventListener('change', function() {
                if (this.checked) {
                    span.classList.add('completed');
                } else {
                    span.classList.remove('completed');
                }
            });

            div.appendChild(tick);
            div.appendChild(span);
            ref.appendChild(div); 
    }
}

// Add a new todo to the DOM
async function addTodoToDOM(todo) {
    const response = await axios.post(API_URL, {
        todo: todo
    })
}

// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', () => {
    //  write here
});

// Toggle todo completion
function toggleTodo(id, completed) {
//    write here
}

// Delete a todo
function deleteTodo(id) {
    // write here  
}
