import React from 'react';
import github from '../assets/images/home/social-github-pic.png'

export default class People extends React.Component {
  render() {

    return (
      <div>

        <div>
          <div className="ui input">
            <input type="text" placeholder="Search for your character here..." className="inputSearch" />
          </div>
            <button className="ui button">Search</button>
        </div>

        <div className="container">

        <div className="ui five column grid container">

          <div className="column">
            <figure>
              <img className="socialIcons ui image" src={github} alt=""/>
              <figcaption>Character Name</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img className="socialIcons ui image" src={github} alt=""/>
              <figcaption>Character Name</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img className="socialIcons ui image" src={github} alt=""/>
              <figcaption>Character Name</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img className="socialIcons ui image" src={github} alt=""/>
              <figcaption>Character Name</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img className="socialIcons ui image" src={github} alt=""/>
              <figcaption>Character Name</figcaption>
            </figure>
          </div>

          <div className="column">
            <figure>
              <img className="socialIcons ui image" src={github} alt=""/>
              <figcaption>Character Name</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img className="socialIcons ui image" src={github} alt=""/>
              <figcaption>Character Name</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img className="socialIcons ui image" src={github} alt=""/>
              <figcaption>Character Name</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img className="socialIcons ui image" src={github} alt=""/>
              <figcaption>Character Name</figcaption>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img className="socialIcons ui image" src={github} alt=""/>
              <figcaption>Character Name</figcaption>
            </figure>
          </div>

        </div>
        <div className="centerBox"  >
            <i className="arrow left huge icon" aria-hidden="true"></i>
            <i className="arrow right huge icon" aria-hidden="true"></i>
        </div>

      </div>

      </div>
    );
  }
}
