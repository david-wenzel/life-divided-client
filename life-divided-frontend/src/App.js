import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import Home from "./components/Home";
import Sections from "./components/Sections";
import "./App.css"
import GoalsDetail from "./components/GoalsDetail";

function App() {
  // state
  const [sections, setSections] = useState([]);

  // fetch all sections with nested goals and setSections with that as data that came in from the fetch get request to /sections route
  useEffect(() => {
    fetch("http://localhost:9292/sections")
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);

  function handleEditGoal(editedGoal) {
    setSections(editedGoal);
  }

  //add Goals
  function handleAddGoal(newGoals) {
    setSections(newGoals);
  }


  //add section 
  function handleAddSection(newSections) {
    setSections(newSections);
  }

  function handleDeleteGoal(deletedGoal) {
    setSections(deletedGoal);
  }



  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sections">
           <Sections sections={ sections } handleAddSection={handleAddSection}/>
          </Route>
          <Route exact path="/sections/:id" >
           <GoalsDetail sections={ sections }
           handleDeleteGoal={handleDeleteGoal}
           handleEditGoal={handleEditGoal}
           handleAddGoal={handleAddGoal}
           />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
