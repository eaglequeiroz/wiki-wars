import React, { Component } from 'react';


export default class PeopleDetail extends Component {

  render() {
    return (
      <div className="ui vertically divided grid">
        <div className="one column row">
          <div className="column">
            <img src="" alt="" className="ui small image"/>
          </div>
        </div>

        <div className="four column row">
          <div className="column"><span>Name: </span></div>
          <div className="column"></div>
          <div className="column"><span>Gender: </span></div>
          <div className="column"></div>

          <div className="column"><span>Height: </span></div>
          <div className="column"></div>
          <div className="column"><span>Hair Color: </span></div>
          <div className="column"></div>
        </div>

        <div className="six column row">
          <div className="column"><span>Skin Color: </span></div>
          <div className="column"></div>
          <div className="column"><span>Eye Color: </span></div>
          <div className="column"></div>
          <div className="column"><span>Birth Year: </span></div>
          <div className="column"></div>
        </div>

        <div className="two column row">
          <div className="column">
            <img src="" alt="" className="ui small image"/>
          </div>
          <div className="column">
            <img src="" alt="" className="ui small image"/>
          </div>
        </div>

        <div className="one column row">
          <div className="column"></div>
        </div>

        <div className="one column row">
          <div className="column"></div>
        </div>

        <div className="one column row">
          <div className="column"></div>
        </div>

        <div className="two column row">
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    );
  }

}
