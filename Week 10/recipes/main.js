import recipes from './recipes.js';

//Get Random Recipe

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

// to test
console.log(getRandomListEntry(recipes));

//Html to be loaded

function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<div class="recipeContainer">
            <img id='recipePicture' img src="${recipe.image}" alt="Image of meal" />
            <div id="details">
                <div id="tag">${tagsTemplate(recipe.tags)}</div>
                <div id="recipeTitle">${recipe.name}</div>
                
                <span
                ${ratingTemplate(recipe.rating)}
                </span>

                <div id="description">${recipe.description}</div>
            </div>
        </div>
    </figure>`;
}


function tagsTemplate(tags) {
    const html = tags.map(function(tag) {
        return `<li>${tag}</li>
            `;
    }).join('');
    return html;
}


//Build and get the rating into the html

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <=5; i++) {
        if (i <= rating){
            html += `<span aria-hidden="true" class="icon-star">⭐</span>
            `;
        }
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>
            `;
        }
    }

		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star

		// else output an empty star

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));



//Load Recipes Into Html

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const recipeOutput = document.getElementById('randomRecipe');

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipeHTMLStrings = recipeList.map(recipeTemplate).join('');

	// Set the HTML strings as the innerHTML of our output element.
    recipeOutput.innerHTML = recipeHTMLStrings;
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();


function filter(query) {
	const filtered = recipes.filter(filterFunction)
	// sort by name
	const sorted = filtered.sort(sortFunction)
		return sorted

}

function searchHandler(e) {
	e.preventDefault()
	// get the search input
  // convert the value in the input to lowercase
  // use the filter function to filter our recipes
  // render the filtered list

}