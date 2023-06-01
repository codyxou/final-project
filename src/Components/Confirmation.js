import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';
import EditSubmitButton from './EditSubmitButton';


function Confirmation() {
  const url='http://localhost:3501/comments';
//assigning location variable to the useLocation method for next step of grabbing the state contact as an object

  const location = useLocation();
  const contact = location.state.contact;



  return (
    <div>

      <Box
       sx={{
        textAlign:'center'
       }}>
      <Typography variant="h2" gutterBottom>We're on it.</Typography>
      <Typography 
            variant="body1" 
            gutterBottom
            sx={{
              fontSize:'22px'
            }}>Thanks for contacting us {contact.firstName} {contact.lastName}! We will reply within 1-2 business days.</Typography>
      <Typography
            variant='body2'
            gutterBottom>Comment - {contact.comments}</Typography>

        <Button variant="contained" href="/" sx={{m:1}}>Return Home</Button>
        <EditSubmitButton />

      </Box>
    </div>
  )
}

export default Confirmation