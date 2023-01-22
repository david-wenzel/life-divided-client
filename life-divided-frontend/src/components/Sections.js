import React from "react";
// import { NavLink } from "react-router-dom";
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

    //
    const renderSections = sections.map((section) => (
        <ul key={city.id}>
            <NavLink to={`/cities/${section.id}`}>{city.name}</NavLink>
        </ul>
      ));

  return (
    <div>
      <h1>Sections</h1>
    </div>
  );
}
