function searchRecipe(event) {
  event.preventDefault();
  let search = document.querySelector("#search");
  let ingredients = search.value;
  let context =
    "You are a michelin star chef who has cooked various cuisines from different cultures. You know how to put various ingredients together to make a delicous and nutritous meal";
  let prompt = `What recipe can I make with ${ingredients}? Please answer with  a list of recipes in html with the title of the recipe as h2, the ingredients as li,and the directions as numbered li `;
  let apiKey = "4tba4782084a6foabae1d06b62316bcd";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(getRecipe);
  alert("loading...");
}

function getRecipe(response) {
  let recipe = response.data.answer;
  let recipeSec = document.querySelector("#recipe");
  recipeSec.innerHTML = recipe;
  // new Typewriter("#recipe", {
  // strings: `${recipe}`,
  // autoStart: true,
  // cursor: "",
  //});
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", searchRecipe);
