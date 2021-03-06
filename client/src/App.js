import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Landing from './components/landing';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Alert from './components/layout/Alert';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import  setAuthToken  from './utils/setAuthToken';

import './App.css';

if(localStorage.token) {
    setAuthToken(localStorage.token); 
  }

const App = () => {
    useEffect(() => {
      store.dispatch(loadUser());
    }, []);
       
       return (
       <Provider store={store}>
         <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

          </Switch>
        </section>
      </Fragment>
      </Router>
       </Provider>

);
}
  
export default App;
