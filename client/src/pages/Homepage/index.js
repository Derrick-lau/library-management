import React, { useState } from 'react';
import RoutesOnHomepage from '../../components/Menu';
import SearchRequest from '../../api/SearchRequest';

const Homepage = ({setLogs}) => {
    const [routes] = useState
    ([
      { name: 'Books', id: 1, url: 'books'},
      { name: 'Users', id: 2, url: 'users'},
      { name: 'Loans', id: 3, url: 'loans'},
      { name: 'Logs', id: 4, url: 'logs'}
    ]);

    const getLogs = () => {
      SearchRequest('http://localhost:5000/logs',
      '', setLogs)
    }

    return (
      <main>
          {routes.map(({ id, ...outherRoutes }) => (
          <RoutesOnHomepage key={id} {...outherRoutes} LoadData={getLogs} />
          ))}
      </main>
    );
};

export default Homepage;
