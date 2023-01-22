import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Sections from "./components/Sections";
import Goals from "./components/Goals";

function App() {
  // state
  const [sections, setSections] = useState([]);

  // fetch all sections with nested goals and setSections with that as data that came in from the fetch get request to /sections route
  useEffect(() => {
    fetch("http://localhost:9292/sections")
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);

  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sections">
           <Sections sections={ sections } />
          </Route>
          <Route exact path="/sections/:id" >
           <Goals sections={ sections } />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
