import React, { Component }  from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  state = {
    color: "transparent"
  };

  listenScrollEvent = e => {
    if (window.scrollY > 500) {
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
      <header className="navbar navbar-fixed-top" data-spy="affix" data-offset-top="30" style={{backgroundColor: `${this.state.color}`}}>
        <div className="logo">
          LOGO
        </div>
        <nav>
          <ul>
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li className="last">
              <Link to="/Program">Program</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
