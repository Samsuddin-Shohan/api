// function loadData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
// };
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayData(json))
};

function displayData(users){
    
    const ul = document.getElementById('user-list');

    for(const user of users){
        const li = document.createElement('li');
        li.innerText = `Hello ${user.name}`;
        ul.appendChild(li);
        
    }

}

