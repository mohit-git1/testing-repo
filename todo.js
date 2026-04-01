let todos = []
function addTodo(item){
    todos.push(item)
}
function deleteTodo(index){
    todos[index] =null
}
addTodo("Buy Soda")
deleteTodo(5)console.log(testing the sentinel by sending PR)
