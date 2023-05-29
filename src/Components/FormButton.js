import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddPhotoForm from './AddPhotoForm';

function FormButton() {
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
                {!showForm ? "Add a Photo" : "Close Form"}
    </Button>
    {showForm && <AddPhotoForm  />}
    </div>
  )

}

export default FormButton