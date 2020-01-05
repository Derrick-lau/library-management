import React from 'react';
import './index.scss';
import { Table, Button,} from 'react-bootstrap';
import Input from '../Styled-Input';

const SearchSection = ({InputName1, InputType1, InputPh1, InputName2, InputType2, InputPh2, 
                        SearchInput, SearchRequest, mappedTable, thead1, thead2, thead3}) => {
                                                  
  return (
    <>
    <section>
      <Input name= {InputName1} type={InputType1} placeholder={InputPh1} required onChange={SearchInput}/>
      <Input name={InputName2} type={InputType2} placeholder={InputPh2} required onChange={SearchInput}/>
      <Button variant="secondary"  onClick={SearchRequest} size="sm" required>
        Search
      </Button>
      <Table responsive>
        <thead>
          <tr><th>#</th><th>{thead1}</th><th>{thead2}</th><th>{thead3}</th></tr>
        </thead>
        <tbody>
          {mappedTable}
        </tbody>
      </Table>
    </section>
    </>
  )
};
  

export default SearchSection;
