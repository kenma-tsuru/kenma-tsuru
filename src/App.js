import './App.css';
import { Route, Link, Switch } from "react-router";
import About from './About';
import Home from './Home';
function App() {
  return (
    <>
      <nav>
        <ul id="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
