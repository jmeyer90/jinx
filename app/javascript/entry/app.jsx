import React from 'react';
import { Route } from 'react-router-dom';
import NavComponent from '../components/nav/navComponent'
import Splash from '../components/splash/splash'
import Business from '../components/businesses/business'
import SessionForm from '../components/session/sessionForm'
import Footer from '../components/footer/footer'
import { AuthRoute, ProtectedRoute } from '../utils/route_util'

const App = () =>{
  return(
    <>
      <Route path="/" component={ NavComponent } />
      <Route exact path="/" component={ Splash } />
      {/* <Route path ="/search" component={ SearchResultsConstructor} /> */}
      <Route path={`/businesses/:businessId`} component={ Business } />
      <AuthRoute path="/signup" component={ SessionForm } />
      <AuthRoute path="/login" component={ SessionForm } />
      <Route path="/" component={ Footer } />
    </>
  )
};

export default App;