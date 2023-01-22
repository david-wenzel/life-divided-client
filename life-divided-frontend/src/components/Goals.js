import React from 'react'
import { useParams } from 'react-router-dom'

export default function Goals({sections}) {
  
  // useParams
  const { id } = useParams();
  const params = useParams();

  // find section with same id as id from the browser bar
  // browswer bar returns a number that is a string so we to to parseInt to get it back to a integer to compare to our sections object
  const foundSection = sections.find(({ id }) => id === parseInt(params.id));

  // each goal
  let goals =foundSection.goals.map((goal) => goal.goal )

  console.log(goals)









    
  return (
    <div>
      
    </div>
  )
}
