import React from 'react';
import {
  Link
} from 'react-router-dom';

const RightNav = ({ open }) => {
  return (
    <div className="items" style={{opacity: open ? 1 : 0, transition: 'opacity 0.3s linear', zIndex:'80'}}>
      <ul className="list">
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
    </div>
  )
};

export default RightNav;
