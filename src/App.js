import { cleanup } from '@testing-library/react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import 'bulma'

import {HomePage} from './pages/Home';
import {LivePricePage} from './pages/LivePrice';

const foodTypes = ["grains", "vegetables", "fruit and nuts", "dairy and alternatives", "animal products and alternatives", "sweets", "seasoning and sices", "oils"]



const fruitTypes = [
  'Apple', 
  'Apricot',
  'Banana',
  'Blueberry',
  'Cherry',
  'Fig',
  'Grape',
  'Grapefruit',
  'Guava',
  'Honeydew',
  'Kiwi',
  'Lemon',
  'Lime',
  'Lychee',
  'Mandarin',
  'Mango',
  'Melon',
  'Nectarine',
  'Orange',
  'Passionfruit',
  'Papaya',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Pomegranate',
  'Pomelo',
  'Raspberry',
  'Strawberry',
  'Watermelon']

const vegetableTypes = [
  'Asparagus',
  'Avocado',
  'BBQ vegies',
  'Bean',
  'Beetroot',
  'Broccoli',
  'Brussels sprouts',
  'Cabbage',
  'Capsicum',
  'Carrot',
  'Cauliflower',
  'Celery',
  'Chickpea',
  'Chinese broccoli',
  'Chinese cabbage',
  'Citrus coleslaw',
  'Corn or sweet corn',
  'Cucumber',
  'Aubergine',
  'Fennel',
  'Lettuce',
  'Mushroom',
  'Onion',
  'Parsnip',
  'Peas',
  'Potato',
  'Pumpkin',
  'Radish',
  'Salsa',
  'Spinach',
  'Squash',
  'Sweet potato',
  'Tabbouleh',
  'Tomato',
  'Turnip',
  'Courgette',
]

const grainTypes = [
  'Brown rice',
  'Corn tortillas',
  'Graham crackers',
  'Oatmeal',
  'Popcorn',
  'Cereals',
  'Bread',
  'Pasta',
  'Bagel',
  'Cornmeal',
  'Crackers',
  'English muffins',
  'French bread',
  'Hamburger & hot dog buns',
  'Macaroni',
  'Noodles',
  'Pancakes',
  'Waffles',
  'Pretzels',
  'Spaghetti',
  'Flour',
]

const seasoningAndSpices = ['bouillon', 'salt', 'pepper', 'paprika', 'ground ginger', 'sesame', 'seedcream of tartarchili sauce', 'soya sauce', 'apple cider', 'hoisin sauce', 'liquid smoke', 
'rice wine', 'vegetable bouillon', 'poppy seed', 'wasabi', 'fish stock', 'rose water', 'champagne vinegar', 'bbq rub', 'jamaican jerk spice', 'accent seasoning', 'pickling spice', 'mustard powder', 'mango powder', 'adobo seasoning', 'kasuri methi', 'caribbean jerk seasoning', 'brine', 'matcha powder', 'cassia']

function generateCheckboxes(inputs) {
  var newInputs = inputs.map(i => {
    return (<div>
              <input type="checkbox" id={i} name={i} value={i}/> 
              <label for={i}> {i} </label>
            </div>);
  });
  return <div> {newInputs} </div>
}

function App() {
  return (
  <div>
    <h1 class = "is-size-1"> 
      Welcome to *Ready Recipies*</h1>
    <h2 class = "is-size-2"> 
      Please select the desired meal type and ingredients from below 
    </h2>
    <br/>
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
    </div>
  </div>
  )
}

export default App;
