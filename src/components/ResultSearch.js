import React from 'react';
import { NavLink } from 'react-router-dom'
import genericPeople from '../assets/images/people/people-generic-pic.png';
import genericFilm from '../assets/images/films/films-generic-pic.png';
import genericStarship from '../assets/images/starships/starships-generic-pic.png';
import genericVehicle from '../assets/images/vehicles/vehicle-generic-pic.png';
import genericSpecies from '../assets/images/species/species-generic-pic.png';
import genericPlanet from '../assets/images/planets/planets-generic-pic.png';

export default class ResultSearch extends React.Component {

  previousArrow(){
    if(this.props.previous !== null){
      return (
        <i className="arrow left huge icon" aria-hidden="true"></i>
      );
    } else {
      return '';
    }
  }

  nextArrow(){
    if(this.props.next !== null){
      return (
        <i className="arrow right huge icon" aria-hidden="true"></i>
      );
    } else {
      return '';
    }
  }

  exactLabel(item){
    if (item.url.match(/film/i)){
      return item.title;
    } else {
      return item.name;
    }
  }

  extractImagePath(url){
    switch(url){
      case (url.match(/people/i)).input:
        return genericPeople;
      case (url.match(/film/i)).input:
        return genericFilm;
      case (url.match(/starship/i)).input:
        return genericStarship;
      case (url.match(/vehicle/i)).input:
        return genericVehicle;
      case (url.match(/species/i)).input:
        return genericSpecies;
      case (url.match(/planet/i)).input:
        return genericPlanet;
      default:
        return null;
    }
  }

  result(){
    if(this.props.result.length > 0){
      return (
        <div className="container">

          <div className="ui five column grid container">

            {
              this.props.result.map((item,k) => {
                var cleanURL = item.url.replace('https://swapi.co/api','/detail');
                var imagePath = this.extractImagePath(cleanURL);

                var print =
                <div className="column" key={k}>
                  <NavLink to={cleanURL} >
                    <figure className="center">
                      <img className="ui small image" src={imagePath} alt={this.exactLabel(item)}/>
                      <figcaption>{this.exactLabel(item)}</figcaption>
                    </figure>
                  </NavLink>

                </div>;
                return print;
              })
            }

            {this.print}

          </div>
          <div className="center" >
              {this.previousArrow()}
              {this.nextArrow()}
          </div>

        </div>
      );
    } else {
      return (
        <div>
          <h1 className="ui header">No Results...</h1>
        </div>
      );
    }
  }

  render() {
    return (
      this.result()
    );
  }
}
