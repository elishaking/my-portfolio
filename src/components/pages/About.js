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
    start: new Date(2016, 9, 1)
  },
  {
    name: "Express",
    start: new Date(2015, 11, 1)
  },
  {
    name: "GCP/Firebase",
    start: new Date(2016, 9, 1)
  }
];

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
];

const positions = [
  {
    company: "Telecom Dairesi",
    title: "Telecom Engineer and Android Developer"
  },
  {
    company: "Eastern Mediterranean University",
    title: "Co-coordinator of Arduino Masterclass"
  },
];

const education = [
  {
    school: "Eastern Mediterranean University",
    degree: "B.Sc.",
    field: "Electrical and Electronics Engineering",
    grade: "4.00/4.00",
    start: new Date(2012, 10, 1),
    end: new Date(2016, 6, 28)
  }
];

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

  openCodeWars = () => {
    window.open("https://www.codewars.com/users/elishaking", "_blank");
  }

  render() {
    return (
      <Container className="about">
        <div className="fixed-bg"></div>

        <Navbar route="about" />

        <div className="content">
          <img onClick={this.openCodeWars} className="codewars-badge" src="https://www.codewars.com/users/elishaking/badges/large" alt="Codewars Badge" />

          <h1>Tech <span>\></span></h1>

          <div className="tech-list">
            {
              techs.map((tech) => (
                <div className="tech">
                  <h2><span className="light">{tech.name}</span> | {this.getExperience(tech.start)}</h2>
                  {/* <p></p> */}
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

          <h1>Other Notable Positions</h1>
          <div className="work-list">
            {
              positions.map((position) => (
                <div className="work">
                  <h2><span>{position.title}</span> | {position.company}</h2>
                </div>
              ))
            }
          </div>

          <h1>Education</h1>
          <div className="education-list">
            {
              education.map((edu) => (
                <div className="work">
                  <h2><span>{edu.degree}</span> | {edu.field}</h2>
                  <p><span>{edu.school}</span> | {edu.grade}</p>
                  <p>
                    {edu.start.getFullYear()} {
                      edu.present ? " - Present" :
                        edu.start.getFullYear() === edu.end.getFullYear() ? "" : ` - ${edu.end.getFullYear()}`
                    }
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </Container>
    );
  }
}
