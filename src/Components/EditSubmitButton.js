import React, { useState } from 'react';
import Button from '@mui/material/Button';
import EditSubmitForm from './EditSubmitForm';

//EditSubmitButton and FormButton are components that "hide" the forms on their respective pages until the button is clicked 

function EditSubmitButton() {
    const [showForm, setShowForm] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setShowForm(!showForm);
        console.log(!showForm ? 'Form was Opened' : 'Form was closed');
    }


  return (
    <div>
    <Button variant="contained" 
            onClick={(e) => handleClick(e)}>
                {!showForm ? "Edit Submission" : "Close Form"}
    </Button>
    {showForm && <EditSubmitForm  />}
    </div>
  )

}

export default EditSubmitButton