import React, { Component } from 'react';
import Container from '../Container';
import Navbar from '../Navbar';

export default class About extends Component {
  render() {
    return (
      <Container className="about">
        <Navbar route="about" />

        <div className="content">
          <h1>Skills</h1>
        </div>
      </Container>
    );
  }
}
