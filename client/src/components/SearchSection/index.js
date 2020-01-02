import React from 'react';
import './index.scss';
import { Table, Button,} from 'react-bootstrap';
import Input from '../Styled-Input';

const SearchSection = ({SearchInput, SearchRequest, mappedBooks}) => {
                                                  
  return (
    <>
    <div className ="serachFileld">
      <div className="SearchInput">
        
        <Input name='title' type='text' placeholder="Title" required onChange={SearchInput}/>
        <Input name='authors' type='text' placeholder="authors" required onChange={SearchInput}/>
      </div>
      <Button variant="secondary"  onClick={SearchRequest} size="sm" required>
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
  

export default SearchSection;
