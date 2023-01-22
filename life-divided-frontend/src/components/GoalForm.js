import React from 'react'
import { useState } from 'react'

export default function GoalForm({id}) {
  
  const initialValues ={
    goal: ''
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
      .then((newGoal) => onAddEvent(newGoal));

    // clear input fields on submit by updating values state:
    setValues(initialValues);
  }

  
  
  
  
  
  
  
    return (
    <div>
      
    </div>
  )
}
