import React from 'react';
import { Route } from 'react-router-dom';
import NavComponent from '../components/nav/navComponent'
import SplashComponent from '../components/splash/splashComponent'
import Business from '../components/businesses/business'
import SessionForm from '../components/session/sessionForm'
import Footer from '../components/footer/footer'

const App = () =>{
  return(
    <>
      <Route path="/" component={ NavComponent } />
      <Route exact path="/" component={ SplashComponent } />
      {/* <Route path ="/search" component={ SearchResultsConstructor} /> */}
      <Route path={`/businesses/:businessId`} component={ Business } />
      {/* <AuthRoute path="/signup" component={ SessionForm } />
      <AuthRoute path="/login" component={ LSessionForm } /> */}
      <Route path="/" component={ Footer } />
    </>
  )
};

export default App;