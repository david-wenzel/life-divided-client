import React, { useState } from 'react'

export default function SectionsForm({handleAddSection}) {

    const initialValues = {
        title: "",
      };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value,
        });
      };


      function handleSubmit(e) {
        // prevent page refresh on submit:
        e.preventDefault();
        // console.log("submitted");
        // console.log(values);
    
        fetch("http://localhost:9292/sections", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((r) => r.json())
          // .then((data) => console.log(data));
          .then((newSection) => handleAddSection(newSection));
        // clear input fields on submit by updating values state:
        setValues(initialValues);
      }






  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>
            <span style={{ fontWeight: "bold" }}>Add New section:</span>
            <input
              type="text"
              name="title"
              placeholder="Section"
              value={values.title}
              onChange={handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
