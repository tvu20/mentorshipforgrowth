import React from 'react';

function Homepage() {
  return (
    <div className="container-fluid">
      <div className="heading main">
        <h1>Mentorship for Growth</h1>
        <p>
          A place for aspiring mentors to learn, connect, and grow together.
        </p>
      </div>
      <div className="intro">
        <div className="row">
          <div className="column paragraph">
            <h2>Mentor the Mentor</h2>
            <p>Founded by a group of women from a diverse range of nationalities, socio-economic and career backgrounds, M4G is an initiative that is part of the Harvard University Franklin Program. Our goal is to unite professionals who want to learn, expand their network, and grow their potential – while giving back to their community!</p>
            <p>We encourage and equip people who are interested in giving back to their community to learn the skills needed to effectively mentor others in their academic journey, career, and life. We help people find new ways to contribute to their community, improve their soft skills, connect with like-minded people, and gain experience for their own career development.</p>
          </div>
          <div className="column image">
            <img src="https://s.ftcdn.net/v2013/pics/all/curated/eF5wSqeQWhBTGEt83MuqEvpvYOTWaxC5_cover_580.jpg?r=cbcdc1f602e63cf939d30a9c49e2c861f5dd51c5" alt="person"/>
          </div>
        </div>
      </div>
      <div className="quote">
        <h2>We make a living by what we get, but we make a life by what we give.</h2>
        <h3>Winston Churchill</h3>
      </div>
      <div className="mission">
        <h3>Our Mission</h3>
        <h2>Giving Back Through Mentorship</h2>
        <p>We strive to create a network of aspiring mentors from around the world and to prepare participants to find mentorship opportunities that best fit their strengths, philosophies, and areas they want to develop. We will advise them on how to be a better mentor and how to lead their own mentorship group in the future. Our ultimate goal is to nurture leaders and encourage members to set up their own networks and practice their leadership.</p>
      </div>
      <div className="pillars">
        <h2>Our Five Pillars</h2>
        <ul className="rows">
          <li className="column">
            <div className="image-holder">
              <img src="https://us.123rf.com/450wm/decorwithme/decorwithme1803/decorwithme180300117/97686595-stock-vector-team-flat-design-style-colorful-illustration.jpg?ver=6z"  alt="community"/>
            </div>
            <p>Fostering a community of like-minded individuals</p>
          </li>
          <li  className="column">
            <div className="image-holder">
              <img src="https://img.freepik.com/free-vector/person-people-man-woman-connect-jigsaw-business-puzzle-flat-background-concept_159757-62.jpg?size=626&ext=jpg" alt="skills" />
            </div>
            <p>Skill-building sessions</p>
          </li>
          <li  className="column">
            <div className="image-holder">
              <img src="https://cdn.dribbble.com/users/310943/screenshots/4202081/zremote-team-collaboration-illustration.png"  alt="leaders"/>
            </div>
            <p>Opportunities to meet, interact, and network with other passionate leaders, especially guest speakers</p>
          </li>
          <li  className="column">
            <div className="image-holder">
              <img src="https://img.freepik.com/free-vector/characters-people-their-social-network-illustration_53876-32594.jpg?size=626&ext=jpg"  alt="network"/>
            </div>
            <p>Opportunities to build their own network under with our guidance and support</p>
          </li>
          <li  className="column">
            <div className="image-holder">
              <img src="https://blogsimages.adobe.com/creative/files/2019/06/Fotolia_224946995_M-1.jpg" alt="career" />
            </div>
            <p>Exposure to potential organizations for future mentorship and career opportunities</p>
          </li>
        </ul>
      </div>
      <div className="harvard">
        <p>
          Inspired by Benjamin Franklin's similar group in colonial Philadelphia, the Franklin Fellowship creates communities dedicated to mutual improvement. The Franklin Fellowship hosts multiple conversations and events each week, usually including guest speakers, with a community of sixty Harvard undergraduates.
        </p>
      </div>
      <div className="join">
        <div className="rows">
          <div className="column image">
            <img src="https://m.economictimes.com/thumb/msid-69418061,width-1200,height-900,resizemode-4,imgsize-505144/mentorship-thnkstock.jpg" alt="person"/>
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

export default Homepage;
