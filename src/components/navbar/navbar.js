import React, { Component }  from 'react';
import Logo from '../../Assets/img/logo.png';
import Burger from './burger';
import {
  Link
} from 'react-router-dom';

class Navbar extends Component {
  state = {
    color: "transparent"
  };

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({color: 'black'})
    } else {
      this.setState({color: 'transparent'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
      // document.addEventListener("scroll", () => {
      //   const backgroundcolor = window.scrollY < 70 ? "transparent" : "black";
      //
      //   this.setState({ color: backgroundcolor });
      // });
    }

  render() {
    return (
      <header className="navbar" style={{zIndex: '10',backgroundColor: `${this.state.color}`}}>
        <nav>
          <div className="logo">
            <img src={Logo} alt='m4g' />
          </div>
          <div className="spacer"/>
          <Burger />
        </nav>
      </header>
    );
  }
}

export default Navbar;
