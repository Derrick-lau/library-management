import React from 'react';
import SearchBook from '../../components/SearchBookSector';
import AddBook from '../../components/AddBookSector';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Bookspage = ({history}) => {

  // delete toggle

  return (
    <main> 
    { 
      history.location.pathname === "/books/add" ?
      <AddBook/>
    :
      <>
      <Link to='/books/add'><Button size="sm">Add Book</Button></Link>
      <Button variant="danger" size="sm" onClick={()=>{}}>Detele Book</Button> 
      <SearchBook/>
      </>  
    }
    </main>
  );
}


export default Bookspage;
