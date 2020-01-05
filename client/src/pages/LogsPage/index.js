import React from 'react';
import { Table } from 'react-bootstrap';


const LogsPage = ({logs}) => {
    // const mappedBooks = fetchedbooks.map(({id, title, isbn, Authors}) =>     
    // <tr key={id}><th scope="row">{id}</th><td>{title}</td><td>{isbn}</td><td>{Authors}</td></tr>);

  return (
    <main>
      <Table responsive>
        <thead>
          <tr><th>#</th><th>Date and Time</th><th>Messages</th></tr>
        </thead>
        <tbody>
          test
        </tbody>
      </Table>
    </main>
  );
}


export default LogsPage;
