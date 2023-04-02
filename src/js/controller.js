// Module Importing
import * as model from "./model.js";
import { MODEL_CLOSE_SEC } from "./config.js";
import searchView from "./views/searchView.js";
import recipeView from "./views/recipeView.js";
import resultView from "./views/resultView.js";
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView.js";
import addRecipeView from "./views/addRecipeView.js";


import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

// https://forkify-api.herokuapp.com/v2
// https://forkify-api.herokuapp.com/v2/rece

///////////////////////////////////////

async function controlRecipes() {
  try {
    // Getting id
    const id = window.location.hash.slice(1);
    if (!id) return;

    // 0. Spinner
    recipeView.renderSpinner();

    resultView.update(model.getSearchResultPage());
    bookmarksView.update(model.state.bookmarks)

    // 1. Loading Recipe
    await model.loadRecipe(id); // Because it's an aync function that returns a promise

    // 2. Rendreing Receipe
    recipeView.render(model.state.recipe);
    const html = "";
    
  } catch (err) {
    recipeView.renderError(err);
  }
}

async function controlSearchResults() {
  try {
    resultView.renderSpinner();

    // Get Search Query
    const query = searchView.getQuery();
    // console.log(query);
    if (!query) return;
    // Load Search Results
    await model.loadSearchResults(query);
    // Render Result
    console.log(model.state.search.results);
    // resultView.render(model.state.search.results);
    resultView.render(model.getSearchResultPage());
    // Render Initial Pagination button
    // console.log(model.state.search);
    paginationView.render(model.state.search);

    controlPagination(1);
  } catch (err) {
    recipeView.renderError(err);
  }
}


function controlPagination(goToPage) {
  // Render New Results
  resultView.render(model.getSearchResultPage(goToPage));
  // Render NEw Pagination
  paginationView.render(model.state.search)
}

function controlServings (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings)
  console.log('Done');

  // Update the recipe view
  // recipeView.render(model.state.recipe)
  recipeView.update(model.state.recipe);

}

function controlAddBookmark () {
  // 1) Add / Delete a bookmar
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe)
  else model.deleteBookmark(model.state.recipe);
  
  // 2) Update reicpe View  
  recipeView.update(model.state.recipe);  

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks) 

}

async function controlAddRecipe (newRecipe) {
  // console.log(newRecipe);
  try {
    // Show Spinenr
    addRecipeView.renderSpinner();    

    // 1) Upload the new recipe data
    await model.uploadRecipe(newRecipe)
    
    // 2) Render recipe
    recipeView.render(model.state.recipe)

    // 3) Close form window
    setTimeout(function() {
      addRecipeView._toggleWindow();
    }, MODEL_CLOSE_SEC * 1000)

    // 4) Display Sucess Msg
    addRecipeView.renderMessage()

    // Render bookamrk View
    bookmarksView.render(model.state.bookmarksf)

    // Change URL
    window.history.pushState(null, "", `#${model.state.recipe.id}`);
    

  } catch(err) {
    console.log(err);
    addRecipeView.renderError(err.message)
  }
 

  model.uploadRecipe(newRecipe)
}

function controlBookmarks () {
  bookmarksView.render(model.state.bookmarks)
}

function init() {
  bookmarksView.addHandlerRender(controlBookmarks)
  recipeView.addHanlderRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings)
  recipeView.addHandlerAddBookmark(controlAddBookmark)
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe)
}
init();
false;

// TIP : Plusieur event avec la même functionb
