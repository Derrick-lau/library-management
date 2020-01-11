import React, {useState} from 'react';
import SearchSection from '../../components/SearchSection';
import ModalButton from '../../components/ModalButton';
import SearchRequest from '../../api/SearchRequest';
import AddOrDeleteOrUpdateRequest from '../../api/AddOrDeleteOrUpdateRequest';


const UserPage = () => {
  //add/delete/search books from server
  const [fetchedUsers, setFetchedUsers] = useState([{id:'', name:'', barcode:'', memberType:''}]);

  //add/delete/search books to server
  const [userToServer, setuserToServer] = useState({name:'', barcode:'', memberType:''});

  const HandleInitState = () => setuserToServer({name:'', barcode:'', memberType:''});


  //onChange Hnadlers
  const HandleUserToServer = e => {
    const { value, name } = e.target;
    setuserToServer({...userToServer, [name]: value });
  };

  const HandleMemberTypeChange = e => {
    setuserToServer({...userToServer, memberType: e.target.value });
  }


  //Api Requests
  const SearchUser = () => {
      SearchRequest('http://127.0.0.1:5000/users/search', userToServer, setFetchedUsers)
  }

  const addUser = (event) => {
    event.preventDefault();
    AddOrDeleteOrUpdateRequest('http://127.0.0.1:5000/users/add', userToServer, 'post', 'Successfully Added')

  }

  const UpdateUser = (event) => {
    event.preventDefault();
    AddOrDeleteOrUpdateRequest(`http://127.0.0.1:5000/users/${userToServer.id}`, userToServer, 'put', 'Successfully updated')

  }

  const DeleteUser = (event) => {
    event.preventDefault();
    AddOrDeleteOrUpdateRequest('http://127.0.0.1:5000/users/delete', userToServer, 'delete', 'Successfully Deleted')

  }

  //map data to a table 
  const mappedUsers = fetchedUsers.map(({id, name, barcode, memberType}) =>     
  <tr key={id}><th scope="row">{id}</th><td>{name}</td><td>{barcode}</td><td>{memberType}</td></tr>);


  return (
    <main>
      <section className={'cudButtons'}>
        <ModalButton property = "Add User" color ="primary" initialiseState={HandleInitState}
          InputPh1='name' InputPh2='barcode' input1="name" input2="barcode" inputType0="hidden"
          inputType1="text" inputType2="text" inputType3="hidden" TypeofSelect="Member Type:"
          selectValue1="Staff" handleSelectChange={HandleMemberTypeChange} SelectRequireBool='required'
          selectValue2="Student" handleChange={HandleUserToServer} handleSubmit={addUser}
        />

        <ModalButton property = "Update User" color ="warning" 
          inputType0="text" InputPh0='UserID' input0="id" initialiseState={HandleInitState}
          InputPh1='name' InputPh2='barcode' input1="name" input2="barcode" 
          inputType1="text" inputType2="text" inputType3="hidden" TypeofSelect="Member Type:"
          selectValue1="Staff" handleSelectChange={HandleMemberTypeChange} SelectRequireBool='required'
          selectValue2="Student" handleChange={HandleUserToServer} handleSubmit={UpdateUser}
        />

        <ModalButton property = "Delete User" color ="danger" initialiseState={HandleInitState}
          InputPh1='UserID' InputPh2='barcode' input1="id" input2="barcode"
          inputType1="text" inputType2="text" inputType3="hidden" inputType0="hidden"
          selectDisplay = "none" handleChange={HandleUserToServer} handleSubmit={DeleteUser}
        />
      </section>
      

      <SearchSection 
        InputName1='name' InputType1='text' InputPh1='name'
        InputName2='barcode' InputType2='text' InputPh2='barcode'
        SearchInput={ HandleUserToServer} SearchRequest={SearchUser} mappedTable={mappedUsers}
        theadID="UserID"thead1='name' thead2='barcode' thead3='memberType'
      />
    </main>
  );
}


export default UserPage;
