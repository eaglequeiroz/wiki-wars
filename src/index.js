import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  NavLink
  } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from './pages/Home'
import People from './pages/People';
import Films from './pages/Films';
import Starships from './pages/Starships';
import Vehicles from './pages/Vehicles';
import Species from './pages/Species';
import Planets from './pages/Planets';

ReactDOM.render((
  <Router>
    <div>

      <div className="ui menu">

          <NavLink to="/" className="item" activeClassName="active item" exact>Home</NavLink>
          <NavLink to="/people" className="item" activeClassName="active item">People</NavLink>
          <NavLink to="/films" className="item" activeClassName="active item">Films</NavLink>
          <NavLink to="/starships" className="item" activeClassName="active item">Starships</NavLink>
          <NavLink to="/vehicles" className="item" activeClassName="active item">Vehicles</NavLink>
          <NavLink to="/species" className="item" activeClassName="active item">Species</NavLink>
          <NavLink to="/planets" className="item" activeClassName="active item">Planets</NavLink>

      </div>

      <section>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/people" component={People} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/starships" component={Starships} />
          <Route exact path="/vehicles" component={Vehicles} />
          <Route exact path="/species" component={Species} />
          <Route exact path="/planets" component={Planets} />
        </div>
      </section>

    </div>
  </Router>
),
document.getElementById('root'));
registerServiceWorker();
