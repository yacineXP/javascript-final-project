// Interactions with api ect
import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE, KEY} from "./config";
import { getJSON, sendJSON } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};


/**
 * Load the recipes from the API
 * @param {String} id The id of the recipe to be loaded
 * @returns {undefined} Does't return anything
 * @author Yacine BAGHDADLI
 * @todo Don't tauch anything 
 */
export const loadRecipe = async function (id) {
  try {
    // API
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
    };

    if (state.bookmarks.some((b) => b.id == id)) state.recipe.bookmarked = true;
    else state.bookmarked = false;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map(function (recipe) {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      ...(recipe.key && { key: recipe.key }),

      };
    });
  } catch (err) {
    throw err;
  }
};

export function getSearchResultPage(page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultPerPage; //
  const end = page * state.search.resultPerPage; //

  return state.search.results.slice(start, end);
}

export function updateServings(newServings) {
  state.recipe.ingredients.forEach((ing) => {
    ing.quantity = ing.quantity * (newServings / state.recipe.servings);
  });

  state.recipe.servings = newServings;
}

export function addBookmark(recipe) {
  // Add Bookmark
  state.bookmarks.push(recipe);

  console.log(state.bookmarks);
  // Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  console.log(state.recipe.bookmarked);

  persistBookmarks();
}

export function deleteBookmark(id) {
  const index = state.bookmarks.findIndex((res) => (res.id = id));
  state.bookmarks.splice(index, 1);

  state.recipe.bookmarked = false;

  persistBookmarks();
}

function persistBookmarks() {
  localStorage.setItem("Bookmarks", JSON.stringify(state.bookmarks));
}

function init() {
  const storage = localStorage.getItem("Bookmarks");
  if (storage) state.bookmarks = JSON.parse(storage);
  console.log(state.bookmarks);
}

function clearBookmarks() {
  localStorage.clear("Bookmarks");
}
// clearBookmarks()

init();

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        // const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient fromat! Please use the correct format :)'
          );

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await sendJSON (`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};  