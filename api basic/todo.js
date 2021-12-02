

function loadTodo(){
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => displayTodos(json))
};

 
loadTodo();

 function displayTodos(toDos){
    const toDoSection = document.getElementById('todos');
    for(const toDO of toDos){
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${todo.title}</h1>
        <p>${todo.completed}</p>
        `
    }
}