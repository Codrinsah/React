import { cleanup } from '@testing-library/react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import 'bulma'

import {HomePage} from './pages/Home';
import {LivePricePage} from './pages/LivePrice';

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
        1<br/>
        <label class="checkbox">
          <input type="checkbox"/> Remember me
        </label>
      </div>
      <div class = "column has-background-danger-light">
        2
      </div>
      <div class = "column has-background-danger-light">
        3
      </div>
    </div>
  </div>
  )
}

export default App;
