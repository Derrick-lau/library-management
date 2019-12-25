import React from 'react';
import { Button} from 'react-bootstrap';
import Input from '../Styled-Input';
import { Link } from 'react-router-dom';

const AddBook = () => (
  <div className="BlockForForm BlockForAdd" >
    <span>Add a New Book</span>
      <form>
        <Input name='title' type='text' placeholder ='Title'></Input>
        <Input name='isbn' type='text' placeholder ='IBSN'></Input> 
        <Input name='author' type='text' placeholder ='Author'></Input>
        <div className ='ButtonBlock'>
          <Link to='/books'><Button>Back</Button></Link>   
          <Button>Save</Button>
        </div>
      </form>
  </div>
);


export default AddBook;
