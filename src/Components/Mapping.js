import React, {useState, useEffect} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';


function Mapping() {

    let url = `http://localhost:3501`
    let [mapViews, setMapViews] = useState([]);


    useEffect(() => {
        allMapViews();
      }, []);
    
      async function allMapViews() {
        try {
          const response = await fetch(`${url}/mapview`);
          const data = await response.json();
          setMapViews(data);
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
      function srcset(image, width, height, rows = 1, cols = 1) {
        return {
          src: `${process.env.PUBLIC_URL}${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
          srcSet: `${process.env.PUBLIC_URL}${image}?w=${width * cols}&h=${
            height * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }

  return (
    <div>
        <Container maxWidth='md'>
       
        <ImageList
      sx={{
        // width: 500,
        // height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
        overflow: 'hidden',
        scrollbarWidth:'none'
      }}
      rowHeight={200}
      gap={1}
    >
      {mapViews.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.image} cols={cols} rows={rows}>
            <img
              {...srcset(item.image, 250, 200, rows, cols)}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
            //   title={item.name}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.name}`}
                >
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
<Outlet />
</Container>
    </div>


  )
}

export default Mapping;