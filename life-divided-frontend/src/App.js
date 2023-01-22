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

  function handleEditGoal(editGoal) {
    // map over all section. if the section id matches edited goals's foreign key for section id, it'll replace existing goal as long as the goal id matches the id of the goal being edited.
    const updateSections = sections.map((section) => {
      if (section.id === editGoal.section_id) {
        return {
          ...section,
          goals: section.goals.map((goal) => {
            if (goal.id === editGoal.id) {
              return editGoal;
            }
            return goal;
          }),
        };
      }
      return section;
    });
    setSections(updateSections);
  }


  //add section 
  function handleAddSection(newSection) {
    setSections([...sections, {...newSection, goals:[]}]);
  }
  console.log(sections)

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
           <Goals sections={ sections }
           handleEditGoal={handleEditGoal}
           />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
