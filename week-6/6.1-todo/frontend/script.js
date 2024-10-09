const API_URL = 'http://localhost:3001/todos';
document.addEventListener('DOMContentLoaded', () => {
  fetchTodos()
});

// Fetch todos from backend
async function fetchTodos() {
    const response = await axios.get(API_URL);
    const ref = document.getElementById("toadded")
    ref.innerHTML="";
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
    console.log(todo);
    if(todo != undefined){
    const ref = document.getElementById("toadded");
    const words = todo;

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

document.getElementById('add-todo-btn').addEventListener('click', () => {
    const valuse = document.getElementById("words").value
    const testValue = valuse; 
    addTodoToDOM(testValue);
});

async function deleteTodo(id) {
    const response = await axios.delete(API_URL, {
        params: {
            param1:id
        }
    });
    document.getElementById("toadded").innerHTML = "";
    fetchTodos();
}
