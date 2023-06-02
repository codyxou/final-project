import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import UncontrolledCarousel from 'reactstrap/lib/UncontrolledCarousel';
import { Card, CardText, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';


function Home() {


  
  return (
    <div>
       <Box
        display="flex"
        justifyContent="center">
          <Typography variant="h2" sx={{mt:2}}>C&A Aerial Photography and Mapping</Typography>
        </Box>

        <Box
        display="flex"
        justifyContent="center">
          <Typography variant="h3" sx={{m:2}}>Where stunning footage and land development collaborate.</Typography>
        </Box>
        
{
/* <ReactCompareSlider
  boundsPadding={0}
  itemOne={<ReactCompareSliderImage alt="Image one" src="https://drive.google.com/uc?export=view&id=1Ul3z8_uPUp3Y41Ha7DtBeWgLhKv3NgIa"/>}
  itemTwo={<ReactCompareSliderImage alt="Image two" src="" style={{transform: 'scale(1.125)'}}/>}
  position={50}
  style={{
    height: '50vh',
    width: '50%'
  }}
/> */}

<div className='carousel-container'>

<UncontrolledCarousel
  items={[
    {
      altText: 'Slide 1',
      caption: '',
      key: 1,
      src: './images/construction-4.jpg'
    },
    {
      altText: 'Slide 2',
      caption: '',
      key: 2,
      src: './images/adelmann-mine.jpg'
    },
    {
      altText: 'Slide 3',
      caption: '',
      key: 3,
      src: './images/forest-trail.jpg'
    }
  ]}
 />

</div>

<Row className='home-cards'>
  <Col sm="4">
    <Card body>
      <CardTitle tag="h5">
        Land Survey
      </CardTitle>
      <CardText>
        Let our drones do the hard work from the skies. Full imagery mapping of your project with many options, including thermal.
      </CardText>
      <Button>
        Learn more
      </Button>
    </Card>
  </Col>
  <Col sm="4">
    <Card body>
      <CardTitle tag="h5">
        Real Estate
      </CardTitle>
      <CardText>
        Take your home listing to the next level. With an overhead view, your content can stand out from the rest for your clients.
      </CardText>
      <Button>
        Learn more
      </Button>
    </Card>
  </Col>
  <Col sm="4">
    <Card body>
      <CardTitle tag="h5">
        Construction
      </CardTitle>
      <CardText>
        Keep a close eye on your projects with constant images from the skies to keep an eye as it progesses closer to completion.
      </CardText>
      <Button>
        Learn more
      </Button>
    </Card>
  </Col>
</Row>




    </div>
  )
}

export default Home