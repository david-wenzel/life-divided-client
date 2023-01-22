import React from 'react'
import { useState } from 'react';

export default function GoalsCard({goal}) {
    const [isEdit, setIsEdit] = useState(false);

    function handleEditClick(e, event) {
        // console.log("updating");
        setIsEdit(!isEdit);
        // console.log(isEdit);
      }



    const renderGoal = (
        <div key={goal.id}>
          {/* <button onClick={(e) => onDeleteClick(e, goal)}>X</button> &nbsp; */}
          <button onClick={(e) => handleEditClick(e, goal)}>Edit</button> &nbsp;
          <span style={{ fontWeight: "bold" }}>{goal.goal}</span>: 
        </div>
      );









  return (
    <div>
      {renderGoal}
    </div>
  )
}
