import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// components
//import Header from './components/headerComponent/header';
import Navbar from './components/navbar/navbar';
import Footer from './components/footerComponent/footer';
import Donate from './components/donateComponent/donate';
import Homepage from './components/pages/homePage';
import About from './components/pages/aboutPage';
import Program from './components/pages/programPage';

// includes
import './Assets/css/default.min.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App" style={{height: '100%'}}>
          <Navbar />
          <main>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Program' component={Program} />
            <Donate />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
