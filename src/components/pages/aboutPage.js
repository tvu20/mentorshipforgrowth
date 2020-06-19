import React from 'react';
import Tri from '../../Assets/img/tri.jpg';
import Chi from '../../Assets/img/chi.jpg';

function About() {
  return (
    <div className="container-fluid">
      <div className="heading about">
        <h1>Organization</h1>
      </div>
      <div className="founders">
        <div className="founder tri row">
          <div className="paragraph column">
            <h2>Tran Tue Tri</h2>
            <h3>Co-founder</h3>
            <p>
              My “day job” is in the consumer goods industry in Asia, for P&G, Samsung, and now as Vice President of Global Brand for Unilever, and I have long been interested in discovering and refining my personal purpose. This has been nurtured by my MBA at The University of Chicago Booth School of Business and my Women Leadership program with Harvard Business School. I have found tremendous value in this journey, both professionally and personally, and I have explored how to bring this to more people through a variety of volunteering, speaking, and startup programs. I have participated and led similar weekly and monthly leadership programs in person throughout Asia and also online through avenues such as Unilever Internal, Junior Achievement, University of Chicago, Harvard Business School and Amcham-sponsored groups. Through Mentorship For Growth, I would like to reach even more people interested in mentorship and create a virtual space for a greater network of mentors to be formed.
            </p>
          </div>
          <div className="image-holder column">
            <img src={Tri} alt='tri tran' />
          </div>
        </div>
        <div className="founder chi row">
          <div className="image-holder column">
            <img src={Chi} alt='tri tran' />
          </div>
          <div className="paragraph column">
            <h2>Ha Thuc Chi</h2>
            <h3>Co-founder</h3>
            <p>
              I have had a circuitous journey to my current professional life as the director of an educational consultancy in Asia – but what unites all the stages in my life has been a passion for learning. From being a concert violinist at a very young age, to being an evolutionary biologist and then going on to Berkeley for PhD coursework in Southeast Asian history, none of this would have been possible without education and inspirational mentors along the way. Through my day job, I am lucky to work with the next generation of Asian young adults who want to change the world, but I feel stymied by the number of people I can reach and impact within a standard workweek. I have been a mentor, chair, and board member for non-profits and mentorship programs throughout Asia, and would love the opportunity to meet other leaders who want to be more involved in their community and find the right balance between practicality and ambition.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
