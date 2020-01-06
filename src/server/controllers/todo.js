const state = {todos: [
    {id:Math.random().toString(36).substring(7), value: "buy shopping", completed: false},
    {id:Math.random().toString(36).substring(7), value: "second", completed: false},
]}

function todo (req, res) {
    res.json({todos: [
        {id:Math.random().toString(36).substring(7), value: "buy shopping", completed: false},
        {id:Math.random().toString(36).substring(7), value: "second", completed: false},
    ]})
}

function getTodos(req, res) {
    res.json(state)
}

function addTodo(req, res) {
    req.body
}

export default todo;