import recipes from './recipes.js';

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


function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img id='appleCrispPicture' img src="${recipe.image}" alt="Image of meal" />
		
        <div id="details">
            <div><a href="#">${recipe.name}</a></h2>
            <div id="tag">
			    ${tagsTemplate(recipe.tags)}
		    </div>
        </div>

		<p class="${recipe.description}"></p>

        <p class="recipe__ratings">
			<span
				class="rating"
				role="img"
				aria-label="Rating: 3 out of 5 stars"
			>
				${ratingTemplate(recipe.rating)}
			</span>
		</p>
</figure>`;
}


function tagsTemplate(tags) {
    const html = tags.map(function(tag) {
        return `<li>${tag}</li>
            `;
    }).join('');
    return html;
}

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