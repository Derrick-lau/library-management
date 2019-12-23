import React from 'react';
import { Button} from 'react-bootstrap';
import Label from '../../components/Input';
import { Link } from 'react-router-dom';

const AddBook = () => {

    return (
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
    );
};


export default AddBook;
