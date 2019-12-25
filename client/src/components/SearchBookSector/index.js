import React, {useState} from 'react';
import './index.scss';
import { Table, Button,} from 'react-bootstrap';
import Input from '../Styled-Input';
import {MapBooks} from '../mapTable'
import Search from '../SearchFetch';

const SearchBook = ({history}) => {

  //books that got from server
  const [fetchedbooks, setFetchedBooks] = useState([{id: null, title: null, isbn: null, authors: null}]);

  //books that will get from server
  const [fetchBook, setfetchBook] = useState({title: null, authors: null});

  // SearchBook with Search Function
  const SearchBook = () => {
    const searchBook = Search('http://localhost:3000/books/search', {title: fetchBook.title, authors: fetchBook.authors}, setFetchedBooks, fetchBook.title )
  }
  // add books that got from server to the table
  const mappedBooks = fetchedbooks.map(({...args}, i) => <MapBooks {...args} key={i}/>);

  return (
    <>
    <div className ="serachFileld">
      <Input name='title/author' type='text' placeholder="Title or Author" required onChange={e => setfetchBook({title: e.target.value, authors: e.target.value})}/>
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
