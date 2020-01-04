import React, {useState} from 'react';
import SearchSection from '../../components/SearchSection';
import ModalButton from '../../components/ModalButton';
import SearchRequest from '../../api/SearchRequest';


const Bookspage = () => {
  //books from server
  const [fetchedbooks, setFetchedBooks] = useState([{id: '', title: '', isbn: '', authors: ''}]);

  //books to server
  const [BooktoServer, setBooktoServer] = useState({id:'', title: '', isbn:'', authors: ''});

  const HandleBooktoServer = e => {
    const { value, name } = e.target;
    setBooktoServer({...BooktoServer, [name]: value });
  };

  const Search = () => {
      SearchRequest('http://localhost:5000/books/search', {title: BooktoServer.title, authors: BooktoServer.authors}, setFetchedBooks)
  }

  //Table of books' data from server
    const mappedBooks = fetchedbooks.map(({id, title, isbn, Authors}) =>     
    <tr key={id}><th scope="row">{id}</th><td>{title}</td><td>{isbn}</td><td>{Authors}</td></tr>);

  // States for "Add"

  // States for "Delete"

  return (
    <main>
      <>
      <ModalButton property = "Add Book" color ="primary" input1="title" input2="isbn" input3="authors"/>
      <ModalButton property = "Delete Book" color ="danger" input1="id" input2="isbn" input3="authors"/>
      <SearchSection SearchInput={HandleBooktoServer} SearchRequest={Search} mappedBooks={mappedBooks}/>
      </>  
    </main>
  );
}


export default Bookspage;
