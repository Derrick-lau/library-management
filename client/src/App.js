import React, { useState} from 'react';
import { BrowserRouter as Switch, Route,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import SignIn from './pages/SignInPage';
import Bookspage from './pages/Bookspage';




const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
      <Switch>
        <Route exact path="/" render={(props) => <SignIn {...props} setIsSignedIn={setIsSignedIn} />}/>
        { isSignedIn ===true?
         <>
          <Header setIsSignedIn={setIsSignedIn} />
          <Route path="/home" component={Homepage}/>
          <Route path="/books" component={Bookspage}/>
         </>
        : null
        }
      </Switch>
  );
}

export default App;
