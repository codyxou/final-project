import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  let handleChange = (e) => {
    let prop = e.target.name;
    let value = e.target.value; 
    setNewImage((prev) => ({ ...prev, [prop]: value }));
    console.log(e);
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const postObject = {
      method: 'POST',
      body: JSON.stringify(newImage),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
  
    try {
      const response = await fetch(MOCKURL, postObject);
      if (!response.ok) {
        throw new Error('Failed to post the data');
      }
      const data = await response.json();
      setAddImage((prev) => [...prev, data]);
      console.log('Data posted', data);
      
    } catch (error) {
      console.error('Error posting data', error);
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
            name="name"
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
            name="residence"
            label="Required"
            placeholder="State or Country"
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
            name="image"
            label="Required"
            placeholder="Image URL"
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