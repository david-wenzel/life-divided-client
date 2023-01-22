import React from "react";
// import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Sections() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/sections")
      .then((res) => res.json())
      .then((data) => setSections(data));
    // console.log(sections)
  }, []);

  console.log(sections);

  return (
    <div>
      <h1>hellow</h1>
    </div>
  );
}
