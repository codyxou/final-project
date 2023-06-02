import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';


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
    //using useNavigate to redirect a user after clicking the submit button to the confirmation page and use spread syntax to create a new object with all the properties of contact and replace id in this new object with the already assigned data.id so we can use our PUT function
    navigate('/confirmation', { state: { contact: { ...contact, id: data.id } } });
    console.log('Data posted', data);
  } catch (error) {
    console.error('Error posting data', error);
  }
};


  return (
    <div>
  {/* <Typography variant='h2' display={'flex'} justifyContent={'center'} sx={{m:2}}>Contact Us</Typography> */}

  <Card className="my-3">
    <CardImg
      alt="Card image cap"
      src="images/contact-image.jpg"
      style={{
        height: 650,
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5" justifyContent="center">
        Contact Us
      </CardTitle>
      <CardText>
        Still have a lot of questions? We'll try to have a lot of answers. Please fill out the form below to get in touch. 
      </CardText>
    </CardBody>
  </Card>
      
      <Box
      component="form"
      display="flex"
      justifyContent="center"
      sx={{
        '& > :not(style)': { m: 1, width: '24ch' },
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
            sx={{bgcolor:'#04AA6D', color:'white', borderColor:'#04AA6D', mt:1 }}
            onClick={handleSubmit}>Submit</Button>
        </div>
        </Box>

    </div>
    
  )

}

export default Contact