import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

const RoutesOnHomepage = ({ name, history, url, LoadData}) => (
  <section
    className="routes"
    onClick={() => {url === 'logs' && LoadData(); history.push(`${url}`)}}
  >
    <div className='route'>
      <h1> {name.toUpperCase()} </h1>
    </div>
  </section>
);

export default withRouter(RoutesOnHomepage);
