import React, { useState, useEffect} from 'react';
import { BrowserRouter as Switch, Route,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import SignIn from './pages/SignInPage';
import Bookspage from './pages/Bookspage';
import axios from 'axios';
import LogsPage from './pages/LogsPage';


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [logs, setLogs] = useState([])

  //if token in session storage , 'isSignedin' === true
  useEffect( () => {
    try{
      const token = window.sessionStorage.getItem('token');
      if(token ) {
        const fetch = async() =>{
          const res = await axios({
            url: 'http://localhost:5000/signin',
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'authorization': token
            }
          });
          if(res.status===200 && res.data){
            setIsSignedIn(true);
          } else {console.error()};
        }
        fetch();
      }
    } catch {console.error()}
  },[]);
    
  

  return (
    <>
      <Switch>
        { isSignedIn === false ? 
          <Route exact path="/" render={(props) => <SignIn {...props} setIsSignedIn={setIsSignedIn}/>}/>
        :
        <>
          <Header setIsSignedIn={setIsSignedIn} />
          <Route exact path="/" render={(props) => <Homepage {...props} setlogs={setLogs}/>}/>
          <Route path="/books" component={Bookspage}/>
          <Route path="/logs" render={(props) => <LogsPage {...props} logs={logs}/>}/>
         </>
        }
      </Switch>
    </>
  );
}

export default App;
