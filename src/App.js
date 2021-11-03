import React from "react";
import Nav from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Globalstyle from "./Globalstyle";
import Hero from './components/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Globalstyle>
        <Nav/>
        <Router>
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/DogsHaven'} exact>
              <Hero/>
            </Route>
            <Route path={process.env.PUBLIC_URL + '/DogsHaven/about'} exact>
              <About/>
            </Route>
            <Route path={process.env.PUBLIC_URL + '/DogsHaven/contact'} exact>
              <Contact/>
            </Route>
            <Route>
              <NoMatch/>
            </Route>
          </Switch>
        </Router>
        <Footer />
      </Globalstyle>
    </>
  );
}

export default App;
