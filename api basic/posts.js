function loadPosts(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => displayData(data))
}
loadPosts();
function displayData(data){
    const posts =  document.getElementById('posts');
    for(const post of data){
        const div = document.createElement('div');
        div.innerHTML = `
        <h1> hello ${post.title} </h1>
        <p>${post.body} </p>
        `
        div.classList.add('post');
        posts.appendChild(div);
    }
}