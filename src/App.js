import {useState} from 'react'
import 'bulma'
import {RecipeList} from './components/RecipeList';
import {Recipe} from './components/Recipe';

const dairyTypes = ['Almond milk','Brie','Buttermilk','Butter','Cashew milk','Cheddar','Clotted Cream','Coconut milk','Condensed Milk','Cow Milk','Crème Fraîche','Double Cream','Emmental','Evaporated Milk','Feta','Goat Milk','Gouda','Ice Cream','Kefir','Mascarpone','Mozzarella','Oat Milk','Parmesan','Powdered Milk','Rice Milk','Single Cream','Sour Cream','Soy Milk','Whipped Cream','Yogurt','Coconut Milk Yogurt','Hemp Yogurt','Soy Milk Yogurt']
const oilsTypes = ['Avocado Oil','Coconut Oil','Olive Oil','Palm Oil','Peanut Oil','Rice bran Oil','Sesame Oil','Sunflower Oil','Mustard Oil']
const nutsTypes = ['Almonds','Black Beans','Cashews','Chickpeas','Hazelnuts','Kidney Beans','Lentils','Macadamia Nuts','Peanuts','Peas','Pecans','Pine Nuts','Pinto Beans','Pistachios','Soybeans','Walnuts']
const sweetsTypes = ['Chocolate Chips','Dark Chocolate','Gummies','Jam','Jelly Beans','Marshmallows','Milk Chocolate','Nutella','Sprinkles', 'Sugar', 'White Chocolate']
const meatTypes = ['Beef','Chicken','Duck','Eggs','Fish','Goat','Lamb','Plant Based Chicken','Plant Based Sausages','Pork','Rabbit','Sausages','Seafood','Seitan','Tempeh','Tofu','Turkey','Veggie Burgers']

const fruitTypes = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Fig', 'Grape', 'Grapefruit', 'Guava', 'Honeydew', 'Kiwi', 'Lemon', 'Lime', 'Lychee', 'Mandarin', 'Mango', 'Melon', 'Nectarine', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Pomelo', 'Raspberry', 'Strawberry', 'Watermelon']

const vegetableTypes = ['Asparagus', 'Aubergine', 'Avocado', 'Bean', 'Beetroot', 'Broccoli', 'Brussels Sprouts', 'Cabbage', 'Capsicum', 'Carrot', 'Cauliflower', 'Celery', 'Chinese Broccoli', 'Chinese Cabbage', 'Corn or Sweet Corn', 'Courgette', 'Cucumber', 'Fennel', 'Lettuce', 'Mushroom', 'Onion', 'Parsnip', 'Potato', 'Pumpkin', 'Radish', 'Spinach', 'Squash', 'Sweet Potato', 'Tomato', 'Turnip']

const grainTypes = ['Bagel', 'Bread', 'Brown Rice', 'Cereals', 'Corn Tortillas', 'Cornmeal', 'Crackers', 'Flour', 'Hamburger Buns', 'Hot Dog Buns','Macaroni','Noodles','Oatmeal', 'Pasta','Popcorn','Pretzels','Spaghetti']

const seasoningAndSpices = ['Apple Cider Vinegar','Bbq Rub','Bouillon','Brine','Caribbean Jerk Seasoning','Cassia','Champagne Vinegar','Fish Stock','Ground Ginger','Hoisin Sauce','Hot Sauce','Jamaican Jerk Spice','Kasuri Methi','Liquid Smoke','Mango Powder','Matcha Powder','Mustard Powder','Paprika','Pepper','Pickling Ppice','Poppy Seeds','Rice Wine','Rose Water','Salt','Seedcream of Tartarchili Sauce','Sesame','Soy Sauce','Vanilla','Vegetable Bouillon']


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
      return (<span class="tag is-success is-medium">
                {i}
              </span>);
    });
    return <div> {showIngredients} </div>
  }
  
  return (
  <div>
    <section class="section has-text-centered has-background-danger has-text-info-light">
      <h1 class = "is-size-1">
        Welcome to *Ready Recipies*</h1>
      <h2 class = "is-size-2"> 
        Please select the desired meal type and ingredients from below 
      </h2>
    </section>
    <div class = "columns">
      <div class = "column has-background-danger-light">
        <h4 class = "is-size-4"> Fruits </h4>
        {generateCheckboxes(fruitTypes)}
      </div>
      <div class = "column has-background-danger-light">
        <h4 class = "is-size-4"> Vegetables </h4>
        {generateCheckboxes(vegetableTypes)}
      </div>
      <div class = "column has-background-danger-light">
        <h4 class = "is-size-4"> Grains </h4>
        {generateCheckboxes(grainTypes)}
      </div>
      <div class = "column has-background-danger-light">
        <h4 class = "is-size-4"> Seasonings and Spices </h4>
        {generateCheckboxes(seasoningAndSpices)}
      </div>

      <div class = "column has-background-danger-light">
        <h4 class = "is-size-4"> Dairy Types </h4>
        {generateCheckboxes(dairyTypes)}
      </div>
      <div class = "column has-background-danger-light">
        <h4 class = "is-size-4"> Oils Types </h4>
        {generateCheckboxes(oilsTypes)}
      </div>
      <div class = "column has-background-danger-light">
        <h4 class = "is-size-4"> Nuts Types </h4>
        {generateCheckboxes(nutsTypes)}
      </div>
      <div class = "column has-background-danger-light">
        <h4 class = "is-size-4"> Sweet Types </h4>
        {generateCheckboxes(sweetsTypes)}
      </div>
      <div class = "column has-background-danger-light">
        <h4 class = "is-size-4"> Meat Types </h4>
        {generateCheckboxes(meatTypes)}
      </div>
    </div>
    <div class="container" width="30%" align="center">
      <div class="field has-text-centered" width='30%'>
        <label class="label">How many recipes do you need?</label>
        <div class="control">
          <input class="input" type="number" id="recipeNumber" name="recipeNumber" placeholder="Number of results"/>
        </div>
        <button onClick = {handleQuery} > Submit </button>
      </div>
      {displaySelected(ingredients)}
    </div>
    {generateJson()}
  </div>
  )
}

export default App;
