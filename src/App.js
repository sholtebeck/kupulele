import React from 'react';
import Header from './Header';
import './App.css';
import './firebase/config';
import './pages/Signup';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Butterflies from './pages/Butterflies';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { UserProvider } from './firebase/UserProvider';
import Profile from './pages/Profile';
import ProfileRedirect from './router/ProfileRedirect';
import PrivateRoute from './router/PrivateRoute';
import AdminRoute from './router/AdminRoute';
import Users from './pages/Users';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <div className="ui grid container">
            <Switch>
            <Route exact path="/butterflies" component={Butterflies} />                 
            <ProfileRedirect exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/profile/:id" component={Profile} />
              <ProfileRedirect exact path="/login" component={Login} />
              <AdminRoute exact path="/users" component={Users} />
              <Route exact path="/">
                <Redirect to="/butterflies" />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
