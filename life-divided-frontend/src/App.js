import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Sections from "./components/Sections";
import Goals from "./components/Goals";



function App() {






  return (
    <div className="App">
      <Router>
      {/* <Navbar /> */}
      <Switch>
      <Route exact path="/" component={ Home }  />
      <Route exact path="/sections" component={ Sections } />
      <Route exact path="/sections/:id" component={ Goals } />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
