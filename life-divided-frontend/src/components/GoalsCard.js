import React from 'react'
import { useState } from 'react';
import GoalEditForm from './GoalEditForm';

export default function GoalsCard({goal, handleEditGoal, handleDeleteClick}) {
    const [isEdit, setIsEdit] = useState(false);


    function handleEditClick() {
        setIsEdit(!isEdit);
      }



    const renderGoal = (
        <div key={goal.id}>
          <h3 style={{ fontWeight: "bold" }}>{goal.goal}</h3> 
          <button id='deleteBtn' onClick={(e) => handleDeleteClick(e, goal)}>X</button> 
          <br/>
          <button id='editBtn' onClick={(e) => handleEditClick(e, goal)}>Edit</button> 
        </div>
      );



      const renderEditGoal = (
        <div key={goal.id}>
          {/* <button onClick={(e) => onDeleteClick(e, goal)}>X</button> &nbsp; */}
          <GoalEditForm
            goal={goal}
            onEditClick={handleEditClick}
            handleEditGoal={handleEditGoal}
          />
          <button id='editBtn' onClick={(e) => handleEditClick(e, goal)}>Edit</button>
          {/* <span style={{ fontWeight: "bold" }}>{goal.goal}</span>{" "} */}
        </div>
      );





  return (
    <div>
        { isEdit?
      <>{renderEditGoal}</>:
      <>{renderGoal}</>
        }
    </div>
  )
}
