import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'

import {HomePage} from './pages/Home';
import {LivePricePage} from './pages/LivePrice';

function App() {

  return (
  <BrowserRouter>
    <div>
      <div>
        <ul>
          <li> <Link to = "/"> Home </Link></li>
          <li> <Link to = "/pricing"> Live Pricing </Link></li>
        </ul>
      </div>
      <Switch>
        <Route path = "/pricing">
          <LivePricePage />
        </Route>
        <Route path = "/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
