import React, { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate, useLocation  } from 'react-router-dom';

function EditSubmitForm() {

    let URL='http://localhost:3501/comments';
//useLocation accesses the object that represents the active URL. In this case we are passing Contact where our first form is
 const location = useLocation();
 //variable assigned to check on the passed state of contact component via location. if it's not available, it defaults to an empty object
  const contact = location.state?.contact || {};
  //declaring the usestate and the object values should be from the passed content component or an empty string
  const [editForm, setEditForm] = useState({
    id: contact.id || '',
    firstName: contact.firstName || '',
    lastName: contact.lastName || '',
    email: contact.email || '',
    comments: contact.comments || '',
  });
  const navigate = useNavigate();

    let handleChange = (e) => {
        let prop = e.target.name;
        let value = e.target.value; 
        setEditForm((prev) => ({ ...prev, [prop]: value }));
        console.log(e);
      };

      const handleUpdate = async (e) => {
        //useNavigate first argument we are passing a To value like <Link to=, the 2nd is the state data we are sending to the confirmation page. contact:editForm is a key-value pair with key being contact and editForm the object. This allows the code to access data within our editForm key on the confirmation page 
        navigate('/confirmation', {state: { contact: editForm }});
        console.log('Edit Form:', editForm);
        e.preventDefault();
        const updateObject = {
          method: 'PUT',
          body: JSON.stringify(editForm),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      
        try {
          const response = await fetch(URL + `/${editForm.id}`, updateObject);
          if (!response.ok) {
            throw new Error('Failed to update the data');
          }
          const data = await response.json();
          setEditForm(data);
          //console.log to check if the data was posted and what
          console.log('Data updated', data);
          
        } catch (error) {
          console.error('Error posting data', error.message);
        }
      };
  return (
    <div>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    
      <div>

      <TextField
            name="firstName"
            label="Required"
            placeholder="First Name"
            margin="normal"
            onChange={handleChange}
            sx={{
                color: 'white',
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
                },
                '& .MuiInputLabel-root': {
                color: 'white',
                  },
              }}
            />

            <TextField
            required
            name="lastName"
            label="Required"
            placeholder="Last Name"
            margin="normal"
            onChange={handleChange}
            sx={{
                color: 'white',
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
                },
                '& .MuiInputLabel-root': {
                color: 'white',
                  },
              }}
            />

            <TextField
            required
            name="email"
            label="Required"
            placeholder="email"
            margin="normal"
            onChange={handleChange}
            sx={{
                color: 'white',
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
                },
                '& .MuiInputLabel-root': {
                color: 'white',
                  },
              }}
            />

            <TextField
            required
            name="comments"
            label="comments"
            placeholder="Let us know what type of service you're interested in or any questions"
            margin="normal"
            multiline
            inputProps={{style:{color: "white" }}}
            rows={4}
            onChange={handleChange}
            sx={{
                color: 'white',
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
                },
                '& .MuiInputLabel-root': {
                color: 'white',
                  },
              }}
            />
      <Button 
          variant="outlined" 
          size='large' 
          sx={{bgcolor:'white', mt:1 }}
          onClick={handleUpdate}>Submit</Button>
      </div>
      </Box>
  </div>
  )
}

export default EditSubmitForm