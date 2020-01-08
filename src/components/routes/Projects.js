import React, { Component } from 'react';
import Container from '../Container';
import Navbar from '../Navbar';
import See from '../icons/See';
import ImageModal from '../ImageModal/ImageModal';

// assets
import calcen from '../../assets/images/projects/CalcEn.svg';
import dizt from '../../assets/images/projects/Dizt.svg';
import gracelites from '../../assets/images/projects/Gracelites.svg';
import quotz from '../../assets/images/projects/Quotz.svg';
import blazehub from '../../assets/images/projects/BlazeHub.svg';
import squaredemy from '../../assets/images/projects/Squaredemy.svg';


const projects = [
  {
    name: "BlazeHub: Social Networking App",
    source: blazehub,
    description: "BlazeHub is a platform for connecting people: A place to chat, follow interesting conversions and be a part of a growing community",
    link: "https://blazehub.skyblazar.com"
  },
  {
    name: "Squaredemy: The most productive way to learn",
    source: squaredemy,
    description: "Squaredemy is an AI-driven learning platform that enhances learning productivity through customized curriculums that are generated based on fun and engaging interactions with the user",
    link: "https://squaredemy.skyblazar.com"
  },
  {
    name: "CalcEn: Complex Calculator App",
    source: calcen,
    description: "CalcEn is a complex number calculator for android that handles arithmetic of complex expressions, matrices and functions",
    link: "https://calcen.skyblazar.com"
  },
  {
    name: "Gracelites International School",
    source: gracelites,
    description: "Gracelites is an outstanding Nursery/Primary committed to laying the crucial foundations that will set your child on the right path to all-round excellence spiritually, intellectually and physically",
    link: "https://gracelites.skyblazar.com"
  },
  {
    name: "Dizt: Navigation App",
    source: dizt,
    description: "Dizt is a simple and intuitive mobile app that enables you to determine the road distance between two locations and the exact travel time using your car, the bus, your bicycle or by walking. You also get to see the transport fare if you are using a bus along some routes",
    link: "https://dizt.skyblazar.com"
  },
  {
    name: "Quotz: Quotes App",
    source: quotz,
    description: "Quotz is an elegant mobile app that displays several mindfully selected quotes in a simple and elegant interface that can be used as a screensaver. It contains words of wisdom from several great men and woman who have had a great impact on the world",
    link: "https://quotz.skyblazar.com"
  },
];

export default class Projects extends Component {
  state = {
    showModal: false,
    modalImgCaption: '',
    modalImgDescription: '',
    modalImageSrc: '',
  };

  closeModal = (e) => {
    this.setState({ showModal: false });
  };

  openModal = (e) => {
    const img = e.target.parentElement.getElementsByTagName('img')[0];
    this.setState({
      showModal: true,
      modalImageSrc: img.src,
      modalImgCaption: img.alt,
      modalImgDescription: img.dataset.description
    });
  };

  render() {
    const { showModal, modalImgCaption, modalImgDescription, modalImageSrc, } = this.state;

    return (
      <Container className="projects">
        <Navbar route="projects" />

        <header>
          <h1>Projects <span>/></span></h1>
          <p>Had a great time with these. Still working on some of them</p>
        </header>

        <div className="content">
          <div className="project-list">
            {
              projects.map((project) => (
                <div className="project">
                  <div className="image">
                    <div>
                      <img src={project.source} alt={project.name} data-description={project.description} />
                    </div>

                    <div className="hover" onClick={this.openModal}>
                      <See />
                    </div>
                  </div>

                  {/* <a className="contributor" href="https://www.linkedin.com/in/elishaking/" rel="noopener noreferrer" target="_blank">
                    <small><strong>Contributor: </strong> Elisha King</small>
                  </a> */}

                  <a href={project.link} rel="noopener noreferrer" target="_blank">
                    {project.name}
                  </a>
                </div>
              ))
            }
          </div>
        </div>

        {
          showModal && (
            <ImageModal
              imgSrc={modalImageSrc}
              imgCaption={modalImgCaption}
              imgDescription={modalImgDescription}
              close={this.closeModal} />
          )
        }
      </Container>
    );
  }
}
