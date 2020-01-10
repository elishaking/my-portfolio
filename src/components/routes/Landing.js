import React, { Component } from 'react';
import Container from '../Container';
import Navbar from '../Navbar';

export default class Landing extends Component {
  openMail = () => {
    window.open('mailto:ek.chibueze@gmail.com', '_blank');
  };

  render() {
    return (
      <Container className="landing">
        <Navbar />

        <div className="content">
          <div className="left">
            <h1>Hi</h1>
            <h1 className="headline">
              I am King Elisha <br />
              A <span>Full Stack</span> Software Enginner <span>\></span>
            </h1>
            <p>
              I love building elegant software solutions with <br />
              beautiful <span>frontends</span> and robust <span>backends</span>
            </p>
            <button onClick={this.openMail}>Contact Me</button>
          </div>
        </div>
      </Container>
    );
  }
}
