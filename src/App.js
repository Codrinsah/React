import {useState} from 'react'
import 'bulma'
import {RecipeList} from './components/RecipeList';
import {Recipe} from './components/Recipe';
import {FoodLogo} from './components/FoodLogo';
import { ColumnHeader } from './components/ColumnHeader';
const dairyTypes = ['Almond milk','Brie','Buttermilk','Butter','Cashew milk','Cheddar','Clotted Cream','Coconut milk','Condensed Milk','Cow Milk','Crème Fraîche','Double Cream','Emmental','Evaporated Milk','Feta','Goat Milk','Gouda','Ice Cream','Kefir','Mascarpone','Mozzarella','Oat Milk','Parmesan','Powdered Milk','Rice Milk','Single Cream','Sour Cream','Soy Milk','Whipped Cream','Yogurt','Coconut Milk Yogurt','Hemp Yogurt','Soy Milk Yogurt']

const oilsTypes = ['Avocado Oil','Coconut Oil','Olive Oil','Palm Oil','Peanut Oil','Rice bran Oil','Sesame Oil','Sunflower Oil','Mustard Oil']

const nutsTypes = ['Almonds','Black Beans','Cashews','Chickpeas','Hazelnuts','Kidney Beans','Lentils','Macadamia Nuts','Peanuts','Peas','Pecans','Pine Nuts','Pinto Beans','Pistachios','Soybeans','Walnuts']

const sweetsTypes = ['Chocolate Chips','Dark Chocolate','Gummies','Jam','Jelly Beans','Marshmallows','Milk Chocolate','Nutella','Sprinkles', 'Sugar', 'White Chocolate']

const meatTypes = ['Beef','Chicken','Duck','Eggs','Fish','Goat','Lamb','Plant Based Chicken','Plant Based Sausages','Pork','Rabbit','Sausages','Seafood','Seitan','Tempeh','Tofu','Turkey','Veggie Burgers']

const fruitTypes = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Fig', 'Grape', 'Grapefruit', 'Guava', 'Honeydew', 'Kiwi', 'Lemon', 'Lime', 'Lychee', 'Mandarin', 'Mango', 'Melon', 'Nectarine', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Pomelo', 'Raspberry', 'Strawberry', 'Watermelon']

const vegetableTypes = ['Asparagus', 'Aubergine', 'Avocado', 'Bean', 'Beetroot', 'Broccoli', 'Brussels Sprouts', 'Cabbage', 'Capsicum', 'Carrot', 'Cauliflower', 'Celery', 'Chinese Broccoli', 'Chinese Cabbage', 'Corn or Sweet Corn', 'Courgette', 'Cucumber', 'Fennel', 'Lettuce', 'Mushroom', 'Onion', 'Parsnip', 'Potato', 'Pumpkin', 'Radish', 'Spinach', 'Squash', 'Sweet Potato', 'Tomato', 'Turnip']

const grainTypes = ['Bagel', 'Bread', 'Brown Rice', 'Cereals', 'Corn Tortillas', 'Cornmeal', 'Crackers', 'Flour', 'Hamburger Buns', 'Hot Dog Buns','Macaroni','Noodles','Oatmeal', 'Pasta','Popcorn','Pretzels','Spaghetti']

const seasoningAndSpices = ['Apple Cider Vinegar','Bbq Rub','Bouillon','Brine','Caribbean Jerk Seasoning','Cassia','Champagne Vinegar','Fish Stock','Ground Ginger','Hoisin Sauce','Hot Sauce','Jamaican Jerk Spice','Kasuri Methi','Liquid Smoke','Mango Powder','Matcha Powder','Mustard Powder','Paprika','Pepper','Pickling Ppice','Poppy Seeds','Rice Wine','Rose Water','Salt','Sesame','Soy Sauce','Vanilla','Vegetable Bouillon']


function App() {

  const [json, setJson] = useState(null)
  const [ingredients, setIngredients] = useState(null)

  function generateCheckboxes(inputs) {
    var newInputs = inputs.map(i => {
      return (<div>
                <input type="checkbox" id={i} name={i} value={i} /> 
                <label for={i}> {i} </label>
              </div>);
    });
    return <div> {newInputs} </div>
  }

  function generateJson() {
    if (json == null) {
      return <div></div>
    }

    const recipes = json.hits
    .sort((hitLeft, hitRight) => hitLeft.recipe.ingredients.length - hitRight.recipe.ingredients.length)
    .map(hit => {
      return <Recipe recipe = {hit.recipe}/>
    });

    return <RecipeList recipes = {recipes} />
  }

  function handleQuery() {
    var allKeywords = fruitTypes.concat(vegetableTypes, grainTypes, seasoningAndSpices, dairyTypes, oilsTypes, nutsTypes, sweetsTypes, meatTypes).filter(keyword => {return document.getElementById(keyword).checked});
    setIngredients(allKeywords)
    var YOUR_APP_ID = "b8f5078d"
    var YOUR_APP_KEY = "8b94e495d9c68eb626acbe907659aacc"

    const recipeNumberField = document.getElementById("recipeNumber");
    var recipeNumber = 10;
    console.log(recipeNumberField.value)
    if (recipeNumberField.value !== "") {
      recipeNumber = recipeNumberField.value
    }

    var query = "https://api.edamam.com/search?q=" + allKeywords.reduce((acc, cur) => acc + " " + cur, "").replaceAll(" ", "+") + `&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=${recipeNumber}`;
    fetch(query).then(res => res.json()).then(res => setJson(res))
  }
  
  function displaySelected(inputs) {
    if (inputs == null) {
      return <div></div>
    }
    var showIngredients = inputs.map(i => {
      return (<span class="tag is-success is-medium m-2">
                {i}
                <button class="delete is-small" onClick={() => removeFromIngredients(i)}></button>
              </span>);
    });
    return <div> {showIngredients} </div>
  }

  function removeFromIngredients(input) {
    const checkBox = document.getElementById(input)
    checkBox.checked = false;
    handleQuery();
  }

  function restartQuery() {
    setIngredients(null)
    setJson(null)
  }
  
  return (
  <div class = "main-content">
    <section class="section has-text-centered has-background-danger has-text-info-light is-small">
      <h1 class = "is-size-1">
        Welcome to *Ready Recipies*</h1>
        <FoodLogo/>
      <h2 class = "is-size-2"> 
        Look in your fridge and select what you have there! 
      </h2>
    </section>
    <div class = "container">
      <div class = "box columns">
        <div class = "column has-background-danger-light">
          <ColumnHeader value = "Fruits" />
          {generateCheckboxes(fruitTypes)}
        </div>
        <div class = "column has-background-danger-light">
          <ColumnHeader value = "Vegetables" />
          {generateCheckboxes(vegetableTypes)}
        </div>
        <div class = "column has-background-danger-light">
          <ColumnHeader value = "Grains" />
          {generateCheckboxes(grainTypes)}
        </div>
        <div class = "column has-background-danger-light">
          <ColumnHeader value = "Seasoning and Spices" />
          {generateCheckboxes(seasoningAndSpices)}
        </div>

        <div class = "column has-background-danger-light">
          <ColumnHeader value = "Dairy" />
          {generateCheckboxes(dairyTypes)}
        </div>
        <div class = "column has-background-danger-light">
        <ColumnHeader value = "Oil Types" />
          {generateCheckboxes(oilsTypes)}
        </div>
        <div class = "column has-background-danger-light">
        <ColumnHeader value = "Nuts and Legumes" />
          {generateCheckboxes(nutsTypes)}
        </div>
        <div class = "column has-background-danger-light">
        <ColumnHeader value = "Sweets" />
          {generateCheckboxes(sweetsTypes)}
        </div>
        <div class = "column has-background-danger-light">
          <ColumnHeader value = "Animal Products / Alternatives" />
          {generateCheckboxes(meatTypes)}
        </div>
      </div>
      <div class="container">
        <div class="field has-text-centered" width='30%'>
          <label class="title label">How many recipes do you need?</label>
          <div class="control">
            <input class="input" type="number" id="recipeNumber" name="recipeNumber" placeholder="Number of results"/>
          </div>
          <div class = 'buttons are-medium m-4'> 
            <button onClick = {handleQuery} class = 'button is-success'> Submit </button>
            <button onClick = {restartQuery} class = 'button is-danger'>Reset search results</button> 
          </div> 
        </div>
        {displaySelected(ingredients)}
      </div>
      {generateJson()}
    </div>
  </div>
  )
}

export default App;
