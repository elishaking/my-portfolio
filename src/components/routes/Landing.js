import React, { Component } from 'react';
import Container from '../Container';
import Navbar from '../Navbar';

export default class Landing extends Component {
  render() {
    return (
      <Container className="landing">
        <Navbar />

        <div className="content">
          <div className="left">
            <h1>Hi</h1>
            <h1 className="headline">
              I am King Elisha <br />
              A <span>Full Stack</span> Software Enginner \>
            </h1>
            <button>Contact Me</button>
          </div>
        </div>
      </Container>
    );
  }
}
