import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Donate from './components/donateComponent/donate';
import Homepage from './components/pages/homePage';
import About from './components/pages/aboutPage';
import Program from './components/pages/programPage';

// includes
import './Assets/css/default.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Program' component={Program} />
        <Donate />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
