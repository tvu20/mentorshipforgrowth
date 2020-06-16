import React from 'react';
import {
  Link
} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-footer">
        <ul className="socials">
          <a href="https://www.facebook.com/Mentorship-For-Growth-107854190969222" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/mentorshipforgrowth" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com/company/mentorshipforgrowth/" className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:mentorshipforgrowth@gmail.com" className="email social">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </ul>
      </div>
      <p className="copyright">Mentorship for Growth &copy; 2020 </p>
    </footer>
  );
}

export default Footer;
