import React, { useState, useEffect} from 'react';
import { BrowserRouter as Switch, Route,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import SignIn from './pages/SignInPage';
import Bookspage from './pages/Bookspage';
import LogsPage from './pages/LogsPage';
import LoadToken from './api/LoadToken';
import Userspage from './pages/Userspage';


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  

  //if token in session storage , 'isSignedin' === true
  useEffect( () => LoadToken(setIsSignedIn),[]);
  

  return (
    <>
      <Switch>
        { isSignedIn === false ? 
          <Route exact path="/" render={(props) => <SignIn {...props} setIsSignedIn={setIsSignedIn}/>}/>
        :
        <>
          <Header setIsSignedIn={setIsSignedIn} />
          <Route exact path="/" component={Homepage}/>
          <Route path="/users" component={Userspage}/>
          <Route path="/books" component={Bookspage}/>
          <Route path="/logs" component={LogsPage}/>
         </>
        }
      </Switch>
    </>
  );
}

export default App;
