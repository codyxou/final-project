import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>

      <Link to="construction">
      <h3>Construction</h3>
      </Link>
      <Link to="mapview">
      <h3>Mapping</h3>
      </Link>

      <Link to="stunningviews">
      <h3>Stunning Views</h3>
      </Link>

      <Link to="communitypics">
      <h3>Add your Own</h3>
      </Link>
    </div>
  )
}

export default Portfolio