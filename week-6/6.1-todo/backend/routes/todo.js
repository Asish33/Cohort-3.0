let todos = []; 

function index() {
    todos.map((todo, idx) => {
        todo.index = idx + 1
        return todo
    })
} 

async function getAllTodo(req, res, next) {
    index();
    res.json({
        todo:todos
    })
}

 async function createTodo(req, res, next) {
    const matter = req.body.todo;
    todos.push({
        id: index,
        todo:matter
    })
    index();
    res.json({
        message: "added todo "
    })
}

 async function updateTodo (req, res, next){
     const up = parseInt(req.params.id);
     const changed = req.body.todo;

     if (up < 1 || up === NaN || up > todos.length) {
         res.status(403).send("Invalid Id")
     }
     const found = todos.find((x) => {
         if (x.index === up) {
             return x;
         }
     })

     found.todo = changed;
     res.json({
         message: "done"
     })
}

async function deleteTodoById(req, res, next) {
    
    const del = parseInt(req.params.id);

    if (isNaN(del) || del < 1 || del > todos.length) {
        return res.status(400).json({ message: 'Invalid ID' });
    }

    todos.splice(del - 1, 1); 

    res.json({
        message: todos
    });
}


module.exports = {
    getAllTodo,
    createTodo,
    updateTodo,
    deleteTodoById,
};

console.log(todos);