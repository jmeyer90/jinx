import React from 'react';
import { Route } from 'react-router-dom';
import NavComponent from '../components/nav/navComponent'
import SplashComponent from '../components/splash/splashComponent'
import FooterComponent from '../components/footer/footerComponent'

const App = () =>{
  return(
    <>
      <Route path="/" component={ NavComponent } />
      <Route exact path="/" component={ SplashComponent } />
      {/* <Route path ="/search" component={ SearchResultsConstructor} />
      <Route path={`/businesses/:businessId`} component={ BusinessShowContainer } />
      <AuthRoute path="/signup" component={ SignUpComponent } />
      <AuthRoute path="/login" component={ LoginComponent } /> */}
      <Route path="/" component={ FooterComponent } />
    </>
  )
};

export default App;