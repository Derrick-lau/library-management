import React, {useState} from 'react';
import './index.scss';
import { Table, Button,} from 'react-bootstrap';
import Label from '../../components/Input';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Bookspage = ({history}) => {
  
  const [books, setBooks] = useState([{title: null, isbn: null, authors: null}])
  const [searchBook, setSearchBook] = useState({title: null, authors: null})

  const fetchBooks = () => {
    axios({
      url: 'http://localhost:3000/books/search',
      method: 'put',
      data:{title: searchBook.title, authors: searchBook.authors}
    })
    .then(book => setBooks(book.data))
    .catch(err => console.log(err))
  }

  const search = e => setSearchBook({title: e.target.value, authors: e.target.value})

  const LoadedBooks = books.map((LoadedBooks, i) => {
    return(
        <tr key={i}>
          <th scope="row">{LoadedBooks.id}</th>
          <td>{LoadedBooks.title}</td>
          <td>{LoadedBooks.isbn}</td>
          <td>{LoadedBooks.authors}</td>
        </tr>
    )
  })

  return (
    
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
      <>
      <Link to='/books/add'><Button size="sm">Add Book</Button></Link>
      <Button variant="danger" size="sm" onChange={()=>{}}>Detele Book</Button>
      <div className ="serachFileld">
        <Label name='title/author' input ={search} type='text' placeholder="Title or Author" required/>
        <Button variant="secondary"  onClick={fetchBooks} size="sm" required>
          Search
        </Button>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>ISBN</th>
              <th>Authors</th>
            </tr>
          </thead>
          <tbody>
            {LoadedBooks}
          </tbody>
        </Table>
      </div>
      </>
    }
    </main>
  );
};


export default Bookspage;
