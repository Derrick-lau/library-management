import React, {useState} from 'react';
import SearchSection from '../../components/SearchSection';
import ModalButton from '../../components/ModalButton';
import SearchRequest from '../../api/SearchRequest';
import AddOrDeleteRequest from '../../api/AddOrDeleteRequest';


const Userspage = () => {
  //add/delete/search books from server
  const [fetchedbooks, setFetchedBooks] = useState([{id: '', title: '', isbn: '', authors: ''}]);

  //add/delete/search books to server
  const [BooktoServer, setBooktoServer] = useState({id:'', title: '', isbn:'', authors: ''});

  const HandleBooktoServer = e => {
    const { value, name } = e.target;
    setBooktoServer({...BooktoServer, [name]: value });
  };

  const SearchBook = () => {
    console.log(BooktoServer)
      SearchRequest('http://localhost:5000/books/search', BooktoServer, setFetchedBooks)
  }

  //Table of books' data from server
    const mappedBooks = fetchedbooks.map(({id, title, isbn, Authors}) =>     
    <tr key={id}><th scope="row">{id}</th><td>{title}</td><td>{isbn}</td><td>{Authors}</td></tr>);

  // States for "Add"
  const addBook = () => {
    console.log(BooktoServer)
    AddOrDeleteRequest('http://localhost:5000/books/add', BooktoServer, 'post', 'Successfully Added')
  }
  // States for "Delete"
  const deleteBook = () => {
    console.log(BooktoServer)
    AddOrDeleteRequest('http://localhost:5000/books/delete', BooktoServer, 'delete', 'Successfully Deleted')
  }

  return (
    <main>
      <ModalButton property = "Add Book" color ="primary" 
        InputPh1='Title' InputPh2='ISBN' InputPh3='Authors eg.Arthur James, Evelyn Dorothy'
        input1="title" input2="isbn" input3="authors"
        inputType1="text" inputType2="text" inputType3="text" 
        handleChange={HandleBooktoServer} handleSubmit={addBook}
      />
      <ModalButton property = "Delete Book" color ="danger" 
        InputPh1='# ID' InputPh2='ISBN' InputPh3=''
        input1="id" input2="isbn" input3=""
        inputType1="text" inputType2="text" inputType3="hidden"
        handleChange={HandleBooktoServer} handleSubmit={deleteBook}
      />
      <SearchSection 
        InputName1='title' InputType1='text' InputPh1='Title'
        InputName2='authors' InputType2='text' InputPh2='Authors'
        SearchInput={HandleBooktoServer} SearchRequest={SearchBook} mappedTable={mappedBooks}
        thead1='Title' thead2='ISBN' thead3='Authors'
      />
    </main>
  );
}


export default Userspage;
