import React from "react";
// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sections({sections}) {

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
