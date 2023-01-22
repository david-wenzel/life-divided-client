import React from "react";
import { useParams } from "react-router-dom";
import GoalsCard from "./GoalsCard";

export default function Goals({ sections }) {
  // useParams
  const { id } = useParams();
  const params = useParams();

  // find section with same id as id from the browser bar
  // browswer bar returns a number that is a string so we to to parseInt to get it back to a integer to compare to our sections object
  const foundSection = sections.find(({ id }) => id === parseInt(params.id));

  // each goal object which contains id, goal, section_id
  let goals = foundSection.goals.map((goal) => goal);

  console.log(goals);

  let renderGoals = goals.map((goal) => (
    <GoalsCard
      key={goal.id}
      goal={goal}
      // onDeleteClick={handleDeleteClick}
      // onEditGoal={onEditGoal}
    />
  ));

  return( 
  <div>
    {renderGoals}
  </div>
  )
}
