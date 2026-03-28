function searchRecipe(event) {
  event.preventDefault();
  let search = document.querySelector("#search");
  let ingredients = search.value;
  let context =
    "Follow user instructions. You are a michelin star chef who has cooked various cuisines from different cultures. You know how to put various ingredients together to make a delicous and nutritous meal. Please answer with  a list of  3 recipes in html with the title of the recipe as <h4>, and the key ingredients in a bulleted list in <p>. Don't show the html and seperate each recipe with a line";
  let prompt = `User Instructions: What recipes can I make with ${ingredients}?  `;
  let apiKey = "4tba4782084a6foabae1d06b62316bcd";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  axios.get(apiUrl).then(getRecipe);
  new Typewriter("#recipe", {
    strings: `Generating recipes...`,
    autoStart: true,
    cursor: ".",
  });
}

function getRecipe(response) {
  let recipe = response.data.answer;
  console.log(`${response}`);
  let recipeSec = document.querySelector("#recipe");
  recipeSec.innerHTML = recipe;
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", searchRecipe);
