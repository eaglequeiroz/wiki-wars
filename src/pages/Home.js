import React from 'react';
import Contacts from '../components/Contacts';

export default class Home extends React.Component {
  render() {
    return (
      <div className="ui center aligned container">
        <h1 className="ui header">Wiki Wars</h1>

        <div className="ui divider"></div>
        <br/><br/><br/>
        <div className="homeText">

          <p>Welcome to the Wiki Wars</p>

          <p>This site was built with <a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">React Js</a>,
          using the awesome Star Wars API (<a href="https://swapi.co/" target="_blank" rel="noopener noreferrer">SWAPI</a>)
          and an another excelent idea from <a href="http://codepen.io/TimPietrusky" target="_blank" rel="noopener noreferrer">Tim Pietrusky</a> for the Star Wars opening crawl.
          I'm also using the <a href="https://react.semantic-ui.com" target="_blank" rel="noopener noreferrer">React Semantic UI</a> for beauty purpose.</p>

          <p>I'm really excited with this Javascript framework and I hope to help other developers or enthusiasts to get to know it by having fun with it.</p>

          <p>I'm a Brazilian Web Developer since 2008 and if you want know me better, you can find me on these places below:</p>

          <Contacts />
      </div>

      </div>
    );
  }
}
