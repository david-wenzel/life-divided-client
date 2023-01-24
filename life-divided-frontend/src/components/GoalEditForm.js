import React from 'react'
import { useState } from 'react'

export default function GoalEditForm({goal, onEditClick, handleEditGoal}) {

    
    console.log(goal)
    const goalId = goal.id
    
    
    const initialValues = {
        goal: goal.goal
    }
    
    const [values, setValues] = useState(initialValues);
    const handleChange = (e) => {
        const {name, value} = e.target
        
        setValues({
            ...values,
            [name]: value,
        })
    }
    

function handleSubmit(e) {
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
        .then((editedGoal) => handleEditGoal(editedGoal));
  
      // set isEdit state to !isEdit so the form is no longer displayed
      onEditClick();
}













  return (
    <div>
        <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="goal"
          placeholder={goal.goal}
          value={values.goal}
          onChange={handleChange}
        />
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
    </div>
  )
}
