import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function Contact() {

  let URL='http://localhost:3501/comments';

  const [contact, setContact] = useState({});
  const navigate = useNavigate();


  let handleChange = (e) => {
    let prop = e.target.name;
    let value = e.target.value; 
    setContact((prev) => ({ ...prev, [prop]: value }));
    console.log(e);
  };


  

const handleSubmit = async (e) => {
  e.preventDefault();
  const postObject = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  try {
    const response = await fetch(URL, postObject);
    if (!response.ok) {
      throw new Error('Failed to post the data');
    }
    const data = await response.json();
    //using useNavigate to redirect a user after clicking the submit button to the confirmation page and to pass the state of contact as an object to the confirmation page and pass the ID for the PUT method
    navigate('/confirmation', { state: { contact: { ...contact, id: data.id } } });
    console.log('Data posted', data);
  } catch (error) {
    console.error('Error posting data', error);
  }
};


  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"><h2>Contact Us</h2></Box>
      
      <Box
      component="form"
      display="flex"
      justifyContent="center"
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
            onClick={handleSubmit}>Submit</Button>
        </div>
        </Box>
    </div>
    
  )

}

export default Contact