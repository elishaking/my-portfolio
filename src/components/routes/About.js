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
        </div>
      </Container>
    );
  }
}
