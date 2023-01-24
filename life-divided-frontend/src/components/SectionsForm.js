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
    
        fetch("http://localhost:9292/sections/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((r) => r.json())
          // .then((data) => console.log(data));
          .then((newSections) => handleAddSection(newSections));
        // clear input fields on submit by updating values state:
        setValues(initialValues);
      }






  return (
    <div id='sectionForm'>
      <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            <span style={{ fontWeight: "bold" }}>Add New Area:</span>
            <br/>
            <input
            className="form-input"
              type="text"
              name="title"
              placeholder=""
              value={values.title}
              onChange={handleInputChange}
            />
          </label>
          
          <input id='formBtn' type="submit" value="+" />
        </form>
    </div>
  )
}
