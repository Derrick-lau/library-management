import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

const RoutesOnHomepage = ({ name, history, url}) => (
  <div
    className="routes"
    onClick={() => history.push(`${url}`)}
  >
    <div className='route'>
      <h1> {name.toUpperCase()} </h1>
    </div>
  </div>
);

export default withRouter(RoutesOnHomepage);
