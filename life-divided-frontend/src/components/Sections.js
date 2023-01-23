import React from "react";
import SectionsForm from "./SectionsForm";
// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

export default function Sections({sections, handleAddSection}) {

    const renderSections = sections.map((section) => (
        <li key={section.id}>
            <NavLink to={`/sections/${section.id}` }><h1 id="section">{section.title}</h1></NavLink>
        </li>
      ));



  return (
    <div>
    <NavBar />
      <h1 className="title">Areas of Life</h1>
      <SectionsForm handleAddSection={handleAddSection}/>
      { renderSections }
    </div>
  );
}
