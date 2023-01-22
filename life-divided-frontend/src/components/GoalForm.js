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

  

  
  
  
  
  
  
  
    return (
    <div>
      
    </div>
  )
}
