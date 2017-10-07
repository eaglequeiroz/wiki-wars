import React, { Component } from 'react';
import genericPeople from '../assets/images/people/people-generic-pic.png'

let urlPeople = "https://swapi.co/api/";
export default class PeopleDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: []
      };

      this.handleLoadPeople = this.handleLoadPeople.bind(this);
    }

    handleLoadPeople(){

      if(!urlPeople.match(/people/i)){
        urlPeople += this.props.location.pathname.replace('/detail/','');
      }

      console.log(urlPeople);

      fetch(urlPeople)
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
          this.setState({ people: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });

      console.log(this.state.people);
    }

  render() {
    this.handleLoadPeople();
    return (
      <div className="ui container" >
        <div className="ui vertically divided grid">
          <div className="one column row">
            <div className="column">
              <img src={genericPeople} alt="" className="ui small centered image"/>
            </div>
          </div>
          { console.log(this.props) }
          { console.log(this.state) }
          <div className="four column row">
            <div className="column"><label className="labelStyle">Name: </label></div>
            <div className="column"><span className="spanStyle">{this.state.people.name}</span></div>
            <div className="column"><label className="labelStyle">Gender: </label></div>
            <div className="column"><span className="spanStyle">{this.state.people.gender}</span></div>
          </div>


          <div className="six column row">
            <div className="column"><label className="labelStyle">Height: </label></div>
            <div className="column"><span className="spanStyle">{this.state.people.height}</span></div>
            <div className="column"><label className="labelStyle">Mass: </label></div>
            <div className="column"><span className="spanStyle">{this.state.people.mass}</span></div>
            <div className="column"><label className="labelStyle">Birth Year: </label></div>
            <div className="column"><span className="spanStyle">{this.state.people.birth_year}</span></div>

            <div className="column"><label className="labelStyle">Hair Color: </label></div>
            <div className="column"><span className="spanStyle">{this.state.people.hair_color}</span></div>
            <div className="column"><label className="labelStyle">Skin Color: </label></div>
            <div className="column"><span className="spanStyle">{this.state.people.skin_color}</span></div>
            <div className="column"><label className="labelStyle">Eye Color: </label></div>
            <div className="column"><span className="spanStyle">{this.state.people.eye_color}</span></div>
          </div>

          <div className="one column row">
            <div className="column">
              <img src={genericPeople} alt="" className="ui small left floated image"/>
              <img src={genericPeople} alt="" className="ui small left floated image"/>
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

        </div>
        <div>
          <button className="ui button">Back</button>
          <button className="ui button">Print</button>
        </div>
      </div>
    );
  }

}
