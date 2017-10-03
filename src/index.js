import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
  } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from './pages/Home'
import People from './pages/People';
import PeopleDetail from './pages/PeopleDetail';
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/people" component={People} />
            <Route path="/detail/people/:id" component={PeopleDetail}  />
            <Route path="/films" component={Films} />
            <Route path="/starships" component={Starships} />
            <Route path="/vehicles" component={Vehicles} />
            <Route path="/species" component={Species} />
            <Route path="/planets" component={Planets} />
          </Switch>
        </div>
      </section>

    </div>
  </Router>
),
document.getElementById('root'));
registerServiceWorker();
