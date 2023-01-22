import React from 'react'
import { useState } from 'react'

export default function GoalEditForm({goal, onEditClick, onEditGoal}) {

const [values, setValues] = useState();

const goalId = goal.div


const initialValues = {
    goal: goal.goal
}

const handleChange = (e) => {
    const {name, value} = e.target

    setValues({
        ...values,
        [name]: value,
    })
}

function handleSubmit(e, goal) {
    e.preventDefault();

    fetch(`http://localhost:9292/goals/${goalId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((r) => r.json())
        // .then((data) => console.log(data))
        .then((editGoal) => onEditGoal(editGoal));
  
      // set isEdit state to !isEdit so the form is no longer displayed
      onEditClick();
}













  return (
    <div>
        
    </div>
  )
}
