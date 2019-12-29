import React, {useState} from 'react';
import './index.scss';
import { Table, Button,} from 'react-bootstrap';
import Input from '../Styled-Input';
import SearchRequest from '../SearchRequest';

const SearchBook = () => {

  //books that got from server
  const [fetchedbooks, setFetchedBooks] = useState([{id: '', title: '', isbn: '', authors: ''}]);

  //books that will get from server
  const [BooktoRequest, setBooktoRequest] = useState({title: '', authors: ''});

  const HandleSearch = e => setBooktoRequest({title: e.target.value, authors: e.target.value})

  // Fetch Books from server
  const SearchBook = () => {
    SearchRequest('http://localhost:5000/books/search', {title: BooktoRequest.title, authors: BooktoRequest.authors}, setFetchedBooks)
  }

  const mappedBooks = fetchedbooks.map(({id, title, isbn, Authors},i) =>     
    <tr key={i}> 
      <th scope="row">{id}</th><td>{title}</td><td>{isbn}</td><td>{Authors}</td>
    </tr>);
                                                  
  return (
    <>
    <div className ="serachFileld">
      <Input name='title/author' type='text' placeholder="Title or Author" required onChange={HandleSearch}/>
      <Button variant="secondary"  onClick={SearchBook} size="sm" required>
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
  )
};
  

export default SearchBook;
