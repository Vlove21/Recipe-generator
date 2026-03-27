function searchRecipe(event) {
  event.preventDefault();
  let search = document.querySelector("#search");
  let ingredients = search.value;
  alert(ingredients);
}

let searchForm = document.querySelector("#");
searchForm.addEventListener("submit", searchRecipe);
