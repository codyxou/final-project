import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import  Box  from '@mui/material/Box';



function Portfolio() {


  return (
    <div>
      <Typography variant='h2' display={'flex'} justifyContent={'center'} sx={{m:2}}>Portfolio</Typography>
      <Box display="flex" justifyContent="center">
      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
      <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="./images/forest-lake3.jpg"
        title="Forest Lake"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stunning Views
        </Typography>
        <Typography variant="body2" color="text.secondary">
        From forest lakes to mountain peaks, our fleet of drones have taken some breath-taking photos.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant="contained" href='portfolio/stunningviews'>VIEW</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="./images/construction-4.jpg"
        title="Construction"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Construction
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Our drones give you a bird's eye view of how your project is going with low risk and quick turnaround.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="medium" variant="contained" href='portfolio/construction'>VIEW</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="./images/mapping-3.jpg"
        title="Mapping"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mapping
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Using the latest techniques, we can carefully map out the entire layout of your area.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="medium" variant="contained" href='portfolio/mapview'>VIEW</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="./images/trail.jpg"
        title="Add your own"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Add your own
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Have your own drone image? Share them with us and our community!
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="medium" variant="contained" href='portfolio/communitypics'>VIEW</Button>
      </CardActions>
    </Card>
    </Stack>
    </Box>
    </div>
  
  )
}

export default Portfolio