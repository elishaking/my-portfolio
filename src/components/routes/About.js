import React, { Component } from 'react';
import Container from '../Container';
import Navbar from '../Navbar';

const techs = [
  {
    name: "JavaScript",
    start: new Date(2013, 3, 1)
  },
  {
    name: "HTML/CSS/SCSS",
    start: new Date(2013, 3, 1)
  },
  {
    name: "NodeJS",
    start: new Date(2015, 3, 1)
  },
  {
    name: "React/Redux",
    start: new Date(2015, 9, 1)
  },
  {
    name: "Express",
    start: new Date(2015, 11, 1)
  },
  {
    name: "GCP/Firebase",
    start: new Date(2016, 9, 1)
  }
]

const works = [
  {
    company: "Skyblazar",
    start: new Date(2018, 2, 1),
    present: true,
    title: "Entrepreneur and Full Stack Engineer",
    description: "Currently developing several apps using React for web (front-end), Flutter for mobile and Express for backend. A handful are publicly available on GitHub while the rest are private repos hosted on Gitlab"
  },
  {
    company: "Quanteq Technology Services",
    start: new Date(2017, 3, 1),
    present: false,
    end: new Date(2018, 1, 8),
    title: "Full Stack Engineer",
    description: "Collaborated with a team of developers and designers both remotely and on-site. Participated in the UI/UX design of several mobile and web apps. Led code implementation and documentation for several responsive web apps and mobile apps."
  }
]

export default class About extends Component {
  /**
   * @param {Date} startDate
   */
  getExperience = (startDate) => {
    const now = new Date();
    // @ts-ignore
    const diff = now - startDate;
    const years = Math.floor(diff / 31579200000);
    const months = Math.floor((diff - years * 31579200000) / 2592000000);

    return `${years}y ${months}m`;
  }

  render() {
    return (
      <Container className="about">
        <Navbar route="about" />

        <div className="content">
          <h1>Tech <span>\></span></h1>
          <div className="tech-list">
            {
              techs.map((tech) => (
                <div className="tech">
                  <h2>{tech.name}</h2>
                  <p>{this.getExperience(tech.start)}</p>
                </div>
              ))
            }
          </div>

          <h1>Work Experience</h1>
          <div className="work-list">
            {
              works.map((work) => (
                <div className="work">
                  <h2><span>{work.title}</span> | {work.company}</h2>
                  <p>
                    {work.start.getFullYear()} {
                      work.present ? " - Present" :
                        work.start.getFullYear() === work.end.getFullYear() ? "" : ` - ${work.end.getFullYear()}`
                    }
                  </p>

                  <p className="description">{work.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </Container>
    );
  }
}
