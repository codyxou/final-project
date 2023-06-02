import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';
import FormButton from './FormButton';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';


function AddYourOwn() {
    const MOCKURL = 'https://6441ae8376540ce2257c82cd.mockapi.io/amdrones/vwa';
    
    let [addImage, setAddImage] = useState({});
    useEffect(() => {
        allImages();
      }, []);
    
      async function allImages() {
        try {
          const response = await fetch(`${MOCKURL}`);
          const data = await response.json();
          setAddImage(data);
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      

      const deleteEntry = async (entryDeletion) => {
        try {
          const response = await fetch(`${MOCKURL}/${entryDeletion.id}`, {
            method: 'DELETE',
          });
          if (response.ok) {
            // If the deletion was successful, update the state
            setAddImage((prevAddImage) => {
              // Filter out the deleted item from the state array
              const updatedAddImage = prevAddImage.filter(
                (item) => item.id !== entryDeletion.id,
                
                
              );
              
              return updatedAddImage;
            });
            
          } else {
            throw new Error('Failed to delete the item');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

 return (
    <div>
      <Typography variant='h2' display={'flex'} justifyContent={'center'} sx={{m:2}}>Community Images</Typography>
        <FormButton />
      <Container maxWidth='lg'>
 
    <Box sx={{ width: 'auto', height: 'auto', }}>
    <ImageList 
            variant="masonry" 
            cols={2} 
            gap={8}>
        {Object.values(addImage).map((item) => (
    <ImageListItem key={item.id}>
      <img
        src={`${item.image}?w=248&fit=crop&auto=format`}
        srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
       <Box display="flex" justifyContent="space-between" alignItems="center" padding={1}>
                  <div>
                    <Typography variant="body2">{item.name},</Typography>
                    <Typography variant="body2">{item.residence}</Typography>
                  </div>
                  <DeleteForeverIcon onClick={() => deleteEntry(item)} />
                </Box>
    </ImageListItem>
  ))}
</ImageList>
    </Box>

<Outlet />
</Container>
</div>
  )
}

export default AddYourOwn