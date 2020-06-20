import React from 'react';
import Join from '../../Assets/img/join.jpg';
import Audience from '../../Assets/img/audience.jpg';
import Offer from '../../Assets/img/offer.jpg';

function Program() {
  return (
    <div className="container-fluid">
      <div className="heading program">
        <h1>Program</h1>
      </div>
      <div className="offer">
        <div className="row">
          <div className="paragraph column">
            <h2>What We Offer</h2>
            <p>
              Through our 8-week program, we will give you a framework to mentor, help you find your mentoring strengths, help you identify your mentoring blind spots and how to improve them, and give tips on how to find a mentoring and network opportunity that best fits your time, interest, and skills.
            </p>
            <p>
              We invite guest speakers who share their mentoring journey, how it enriches their professional careers, and give examples on the lessons they’ve learned on how to be a better mentor. We give participants opportunities to showcase their mentorship skills to others. Through our program, participants can build their credentials and gain valuable experience, which they can demonstrate in front of invited guests and corporate sponsors.
            </p>
          </div>
          <div className="column image">
            <img src={Offer} alt="mentoring"/>
          </div>
        </div>
      </div>
      <div className="audience">
        <div className="row">
          <div className="image column">
            <img src={Audience}  alt="mentoring"></img>
          </div>
          <div className="paragraph column">
            <h2>Our Target Audience</h2>
            <p>
              Mentorship For Growth is designed for professionals who have a couple hours free a week and have always wanted to volunteer, expand their network, or join a board – but never knew which ones were available and which ones would be a good fit for them.
            </p>
            <p>
              We wish to draw participants from a range of backgrounds and professional careers with a variety of skills, and interests – the only thing we ask is they are interested in learning how to be better mentors and how to identify the right mentoring and/or networking opportunity that is a right fit for them.
            </p>
            <p>
            We welcome participants from all over the world to join us. It would be especially advantageous for participants based in Southeast Asia to be part of Mentorship For Growth as we think we would be particularly useful in the region since we have access to mentoring opportunities which could be difficult to find as training programs or clearinghouses for opportunities are rare.
            </p>
          </div>
        </div>
      </div>
      <div className="description">
        <p>
          For our first iteration of the program, we are aiming to recruit 15-20 participants. We hope to  repeat these iterations regularly and ultimately get our participants involved and have them do our mentor training curriculum as well. Our long-term goal is to connect with 500+ people by 2021.
        </p>
      </div>
      <div className="join">
        <div className="rows">
          <div className="column image">
            <img src={Join} alt="person"/>
          </div>
          <div className="column paragraph">
            <h2>Get Involved</h2>
            <p>Mentorship for Growth is establishing our very own mentor network! We are seeking members interested in mentorship and wanting to gain skills and opportunities to help them get started on their mentorship journey. If you can commit 90 minutes a week to join a virtual mentoring session that includes talks given by esteemed professionals who are seasoned mentors, please apply through the form below.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxQkCmahZxCN0CaHj_nEHVIniJKiY6KhKoJ58pqtsaH9OrJg/viewform">Join today >></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
