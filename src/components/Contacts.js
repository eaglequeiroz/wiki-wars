import React, { Component } from 'react';
import linkedin from '../assets/images/home/social-linkedin-pic.png';
import github from '../assets/images/home/social-github-pic.png';
import twitter from '../assets/images/home/social-twitter-pic.png';
import facebook from '../assets/images/home/social-facebook-pic.png';
import instagram from '../assets/images/home/social-instagram-pic.png';
import email from '../assets/images/home/social-email-pic.png';

export default class Contacts extends Component {

    render() {
    return (
      <div className="ui small images">

        <a href="https://www.linkedin.com/in/eaglequeiroz" target="_blank" rel="noopener noreferrer" ><img src={linkedin} alt="Eaglequeiroz Linkeding profile" /></a>
        <a href="https://github.com/eaglequeiroz" target="_blank" rel="noopener noreferrer" ><img src={github} alt="Eaglequeiroz Github profile" /></a>
        <a href="https://twitter.com/eaglequeiroz" target="_blank" rel="noopener noreferrer" ><img src={twitter} alt="Eaglequeiroz Twitter profile" /></a>
        <a href="https://www.facebook.com/eaglequeiroz" target="_blank" rel="noopener noreferrer" ><img src={facebook} alt="Eaglequeiroz Facebook profile" /></a>
        <a href="https://www.instagram.com/eaglequeiroz" target="_blank" rel="noopener noreferrer" ><img src={instagram} alt="Eaglequeiroz Instagram profile" /></a>
        <a href="mailto:igorfqueirozz@gmail.com" target="_top" rel="noopener noreferrer" ><img src={email} alt="Eaglequeiroz's Email" /></a>

      </div>
    );
  }

}
