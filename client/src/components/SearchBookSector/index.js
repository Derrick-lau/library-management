import React, {useState} from 'react';
import './index.scss';
import { Table, Button,} from 'react-bootstrap';
import Input from '../Styled-Input';
import SearchRequest from '../SearchRequest';

const SearchBook = () => {

  //books that got from server
  const [fetchedbooks, setFetchedBooks] = useState([{id: null, title: null, isbn: null, authors: null}]);

  //books that will get from server
  const [BooktoRequest, setBooktoRequest] = useState({title: null, authors: null});

  const HandleSearch = e => setBooktoRequest({title: e.target.value, authors: e.target.value})

  // Fetch Books from server
  const SearchBook = () => {
    const searchBook = SearchRequest('http://localhost:3000/books/search', {title: BooktoRequest.title, authors: BooktoRequest.authors}, setFetchedBooks, BooktoRequest.title )
  }

  const mappedBooks = fetchedbooks.map(({id, title, isbn, authors},i) =>     
    <tr key={i}> 
      <th scope="row">{id}</th><td>{title}</td><td>{isbn}</td><td>{authors}</td>
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
