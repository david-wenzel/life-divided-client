import React from "react";
import SectionsForm from "./SectionsForm";
// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

export default function Sections({sections, handleAddSection}) {

    const renderSections = sections.map((section) => (
        <li key={section.id}>
            <NavLink to={`/sections/${section.id}`}>{section.title}</NavLink>
        </li>
      ));



  return (
    <div>
    <NavBar />
      <h1>Sections</h1>
      <SectionsForm handleAddSection={handleAddSection}/>
      { renderSections }
    </div>
  );
}
