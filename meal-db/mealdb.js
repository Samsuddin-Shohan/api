const searchFish = () => {
    const searchField = document.getElementById('search-field');
    const searchButton = document.getElementById('search-button');
    let searchText = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data))
}

const displayFood = foods => {
    const foodSection = document.getElementById('food-section');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
    </div>
    `;
    foodSection.appendChild(div);

}

