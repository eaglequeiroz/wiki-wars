import React from 'react';
import github from '../assets/images/home/social-github-pic.png';

export default class ResultSearch extends React.Component {

  render() {
    console.log(this.props.result);
    if(this.props.result > 0) {
    return (
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
    );
  } else {
    return(
      <div>
        <h1 className="ui header">No Results...</h1>
      </div>
    );
  }
}
}
