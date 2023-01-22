import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sections() {

    // state
  const [sections, setSections] = useState([]);



    // fetch all sections with nested goals and setSections with that as data that came in from the fetch get request to /sections route
  useEffect(() => {
    fetch("http://localhost:9292/sections")
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);

    //map through each section and using dot notation create a navlink of each title to a component for that sections id
    const renderSections = sections.map((section) => (
        <li key={section.id}>
            <NavLink to={`/sections/${section.id}`}>{section.title}</NavLink>
        </li>
      ));

  return (
    <div>
      <h1>Sections</h1>
      { renderSections }
    </div>
  );
}
