import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from '/imports/ui/Home';
import Signin from '/imports/ui/Signin';
import Signup from '/imports/ui/Signup';
import Joke from '/imports/ui/Joke';


const App = () => {
  return ( 
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/joke" component={Joke} />
      </Switch>
      <ToastContainer />
    </Router> 
  );
}


export default App;
