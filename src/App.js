import React from "react";
import Nav from './components/Navbar';
import {HashRouter as Router, browserHistory, Route, Switch} from 'react-router-dom';
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
        <Router history={browserHistory}>
          <Switch>
            <Route exact path="/">
              <Hero/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
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
