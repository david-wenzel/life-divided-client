import React from 'react'
import { useState } from 'react'

export default function GoalForm({id, handleAddGoal}) {
  
  const initialValues ={
    goal: '',
    section_id: id
  }

  const[values, setValues] = useState(initialValues)

  const handleChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    // prevent page refresh on submit:
    e.preventDefault();

    fetch("http://localhost:9292/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((r) => r.json())
      // .then((data) => console.log(data))
      .then((newGoals) => handleAddGoal(newGoals));

    // clear input fields on submit by updating values state:
    setValues(initialValues);
  }

  
  
  
  
  
  
  
    return (
    <div>
       <form id='goalForm' onSubmit={handleSubmit} autocomplete="off">
          <label>
            <span style={{ fontWeight: "bold" }}>Add New Goal:</span>
            <br/>
            <input
            class="form-input"
              type="text"
              name="goal"
              placeholder="goal"
              value={values.goal}
              onChange={handleChange}
            />
            </label>
            <input id='formBtn' type="submit" value="+" />
        </form>
    </div>
  )
}
