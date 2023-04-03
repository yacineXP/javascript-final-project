


<h1 align="center">
  <br>
  <a href='https://postimg.cc/gXxTfJqK' target='_blank'><img src='https://i.postimg.cc/gXxTfJqK/logo.png' border='0' alt='logo' height="100"/></a>
  <br>
  Forkify [Final Project]
  <br>
  <br>
<p  align="center">
<a  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"  target="_blank"  rel="noreferrer"> <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"  alt="javascript"  width="56"  height="56"/> </a>
</p>
</h1>

<p align="center">
  <a href="#project-description">Project Description</a> |
  <a href="#tech-stack-and-libraries">Tech Stack and Libraries</a> |
  <a href="#how-it-works">How it Works</a> |
  <a href="#features">Features</a> |
  <a href="#acknowledgements">Acknowledgements</a>
</p>



<br>

[![Thumbnail-8.png](https://i.postimg.cc/KYVJqZd4/Thumbnail-8.png)](https://postimg.cc/ns44MtVt)

<div id="project-description"></div>

## 🚀 Project Description
This repository contains the code for a recipe app that was created as part of "The Complete JavaScript Course 2023: From Zero to Expert!" on Udemy. The app allows users to search for recipes, view detailed recipe information, and save their favorite recipes to a bookmark list. The app was built using the Model-View-Controller (MVC) architecture, which separates the code into distinct layers to improve code organization and maintainability.

The app is built using modern JavaScript (ES6+) and uses Parcel as a build tool and bundler. The app also leverages several APIs, including the Forkify API for recipe data and the Food2Fork API for recipe images.

<div id="tech-stack-and-libraries"></div>

## 🛠️ Tech Stack and Libraries
- JavaScript
- HTML/CSS
- Parcel v2 (JavaScript bundler)
- Axios (JavaScript library for making HTTP requests)
- Fraction.js (JavaScript library for working with fractions)
- Uniqid (JavaScript library for generating unique IDs)
- Font Awesome (icon library)
- Babel (JavaScript transpiler)

<div id="how-it-works"></div>

## ⚙️ How it Works
[![forkify-flowchart-part-2.png](https://i.postimg.cc/SxVMNDdh/forkify-flowchart-part-2.png)](https://postimg.cc/zybBxw4t)

The recipe app is built using the Model-View-Controller (MVC) architecture. This architectural pattern separates the code into three distinct layers: the Model, which represents the data and business logic of the app; the View, which displays the data to the user; and the Controller, which handles user input and updates the Model and View accordingly.

The app's main entry point is the index.js file, which sets up the app and instantiates the Controller. The Controller listens for user input events, such as recipe searches and bookmark additions, and updates the Model and View accordingly.

The Model is responsible for fetching and storing data, such as recipe details and bookmark lists, and also implements the app's core business logic, such as calculating recipe servings and nutritional information. The Model also exposes a set of methods that the Controller can use to interact with the data.

The View is responsible for displaying the data to the user and handling user input events, such as clicks and form submissions. The View is implemented using HTML, CSS, and JavaScript, and leverages modern web technologies such as Flexbox and CSS Grid to create a responsive and visually appealing user interface.

Overall, the app is designed to be modular and maintainable, with each component responsible for a specific set of tasks. This makes it easy to add new features and functionality to the app, and also simplifies debugging and testing.

<div id="features"></div>

## 💡 Features
**1. Loading a Recipe from API:** This feature allows users to search for and load recipes from an external API. The website interacts with the API to retrieve data and display it to the user.

**2. Rendering the Recipe:** Once a recipe has been loaded, this feature displays the recipe to the user in an organized and visually appealing manner. It shows the recipe name, ingredients, cooking instructions, and other relevant information

**3.Listening For load and hashchange Events:** This feature listens for events that indicate a change in the current URL, such as when the user navigates to a different page or reloads the current page. It then updates the UI accordingly.

**4. The MVC Architecture:**  The model represents the data and business logic, the view handles the presentation logic, and the controller handles user input and communicates between the model and view.

**5. Helpers and Configuration Files:** Helper functions and configuration files that make it easier to work with the API and other parts of the codebase.

**6. Implementing Error and Success Messages:** This feature displays error and success messages to the user when certain actions are performed, such as when a search query returns no results or a recipe is successfully saved.

**7. Implementing Search Results:** This feature allows users to search for recipes based on keywords or other criteria. It involves setting up a search bar and implementing functionality to retrieve and display search results.

**8. Implementing Pagination:** This feature allows users to navigate through search results using pagination. It involves breaking search results into pages and providing navigation links to move between them.

**9. Updating Recipe Servings:** This feature allows users to update the number of servings for a recipe, which adjusts the quantities of ingredients accordingly.

**10. Developing a DOM Updating Algorithm:** This feature optimizes the rendering of the recipe view by implementing a custom algorithm for updating the DOM (Document Object Model) only when necessary, rather than redrawing the entire view every time there is a change.

**11. Implementing Bookmarks:** This feature allows users to bookmark their favorite recipes for easy access later. It involves implementing functionality to save and retrieve bookmarks, as well as updating the UI to show the bookmarked status of a recipe.

**12. Uploading a New Recipe:**  This feature allows users to upload their own recipes to the website. It involves creating a form for users to enter recipe information, validating the input, and saving the new recipe to the API.

<div id="acknowledgements"></div>

## 📚 Acknowledgements 
This project was created with the help of the course **"Build Responsive Real-World Websites with HTML and CSS"** by **Jonas Schmedtmann**. Many of the concepts and techniques used in this project were learned from this valuable resource.

