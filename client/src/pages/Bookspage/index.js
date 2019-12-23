import React, {useState} from 'react';
import './index.scss';
import { Table, Button,} from 'react-bootstrap';
import Label from '../../components/Input';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {MapBooks} from '../../components/mapTable'


const Bookspage = ({history}) => {

  //books that got from server
  const [fetchedbooks, setFetchedBooks] = useState([{id: null, title: null, isbn: null, authors: null}])

  //books that will get from server
  const [fetchBook, setfetchBook] = useState({title: null, authors: null})

  //search books' data on server
  const getBooks = async(err) => {
    try {  
      const res = await axios({
      url: 'http://localhost:3000/books/search',
      method: 'post',
      data:{title: fetchBook.title, authors: fetchBook.authors}
    })
      if(res.status===200 && res.data.length>=1 && fetchBook.title !==''){
        setFetchedBooks(res.data)
      } else {
        setFetchedBooks([{id:'Not found'}])
      }
    } catch {console.log(err)}
  }

  // add books that got from server to the table
  const mappedBooks = fetchedbooks.map(({...args}, i) => <MapBooks {...args} />)

  // delete toggle

  return (
    
    // page of 'Add Book'
    <main> 
    { history.location.pathname === "/books/add" ?
      <div className="BlockForForm BlockForAdd" >
        <span>Add a New Book</span>
          <form>
            <Label name='title/author' placeholder ='Title'></Label>
            <Label name='title/author' placeholder ='IBSN'></Label> 
            <Label name='title/author' placeholder ='Author'></Label>
            <div className ='ButtonBlock'>
              <Link to='/books'><Button>Back</Button></Link>   
              <Button>Save</Button>
            </div>
          </form>
      </div>
    : 
    // Page of 'Search Book'
      <>
      <Link to='/books/add'><Button size="sm">Add Book</Button></Link>
      <Button variant="danger" size="sm" onChange={()=>{}}>Detele Book</Button>
      <div className ="serachFileld">
        <Label name='title/author' type='text' placeholder="Title or Author" required input={e => setfetchBook({title: e.target.value, authors: e.target.value})}/>
        <Button variant="secondary"  onClick={getBooks} size="sm" required>
          Search
        </Button>
        <Table responsive>
          <thead>
            <tr><th>#</th><th>Title</th><th>ISBN</th><th>Authors</th></tr>
          </thead>
          <tbody>
            {mappedBooks}
          </tbody>
        </Table>
      </div>
      </>
    }
    </main>
  );
};


export default Bookspage;
