import React from 'react'
import { useState } from 'react';
import GoalEditForm from './GoalEditForm';

export default function GoalsCard({goal}) {
    const [isEdit, setIsEdit] = useState(false);
console.log(goal)
    function handleEditClick(e, goal) {
        setIsEdit(!isEdit);
      }



    const renderGoal = (
        <div key={goal.id}>
          {/* <button onClick={(e) => onDeleteClick(e, goal)}>X</button> &nbsp; */}
          <button onClick={(e) => handleEditClick(e, goal)}>Edit</button> &nbsp;
          <span style={{ fontWeight: "bold" }}>{goal.goal}</span>: 
        </div>
      );



      const renderEditGoal = (
        <div key={goal.id}>
          {/* <button onClick={(e) => onDeleteClick(e, goal)}>X</button> &nbsp; */}
          <button onClick={(e) => handleEditClick(e, goal)}>Edit</button> &nbsp;
          <span style={{ fontWeight: "bold" }}>{goal.goal}</span>:{" "}
          <GoalEditForm
            goal={goal}
            onEditClick={handleEditClick}
            // onEditGoal={onEditGoal}
          />
        </div>
      );





  return (
    <div>
        { isEdit?
      <>{renderGoal}</>:
      <>{renderEditGoal}</>
        }
    </div>
  )
}
