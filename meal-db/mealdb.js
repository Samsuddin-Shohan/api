const searchFish = () => {
  const searchField = document.getElementById('search-field');
  const searchButton = document.getElementById('search-button');
  let searchText = searchField.value;
  searchField.value = '';
  const noSearchFOund = document.getElementById('no-search-found');
  noSearchFOund.textContent = '';
 
  if(searchText  == ''){
    
    const div = document.createElement('div');
    div.innerHTML = `
      <h3 class = 'text-center'>please give a searching parameter </h3>
    `;
    noSearchFOund.appendChild(div);  
  }
  else{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}
  }
  

const displayFood = meals => {
  const foodSection = document.getElementById('food-section');
  foodSection.textContent = '';
  
  
  if(meals==null){
    const div= document.createElement('div');
    div.innerHTML = `
    <h3 class ='text-center'>Please type a valid food </h3>
    `;
    foodSection.appendChild(div);
  }
  else{
    meals.forEach(meal => {
    const div = document.createElement('div');
    div.classList.add('col');
    meal.strInstructions = meal.strInstructions.slice(0,300);
    div.innerHTML = `
      <div class="card">
                  <img src="${ meal.strMealThumb }" class="card-img-top" alt="..." width = "100px" >
                  <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions}</p>
                  </div>
      </div>
      `;
    foodSection.appendChild(div);
    })
  }
  
  

}

