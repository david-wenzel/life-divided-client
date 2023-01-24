import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom";
import Home from "./components/Home";
import Sections from "./components/Sections";
// import GoalsDetail from "./components/GoalsDetail";
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
    // map over all section. if the section id matches edited goals's foreign key for section id, it'll replace existing goal as long as the goal id matches the id of the goal being edited.
    // const updateSections = sections.map((section) => {
    //   if (section.id === editGoal.section_id) {
    //     return {
    //       ...section,
    //       goals: section.goals.map((goal) => {
    //         if (goal.id === editGoal.id) {
    //           return editGoal;
    //         }
    //         return goal;
    //       }),
    //     };
    //   }
    //   return section;
    // });
    setSections(editedGoal);
    console.log(sections)
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
    // console.log("handle delete Event", deletedEvent);
    // newCitites filters cities array down to all cities whose id doesn't match the deleted id.
    const newSections = sections.map((section) => {
      // map over cities. if the city id matches the deleted event's foreign key for city id, it will copy the city and filter down the city's events those whose id don't match the deleted event's id.
      if (section.id === deletedGoal.section_id) {
        return {
          ...section,
          goals: section.goals.filter((goal) => goal.id !== deletedGoal.id),
        };
      }
      return section;
    });
    // console.log(newCities);
    setSections(newSections);
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
