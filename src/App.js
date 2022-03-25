import TeamList from './Views/Teams/TeamList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import TeamDetails from './Views/Teams/Players/TeamDetails';
import PlayerList from './Views/Teams/Players/PlayerList';
import PlayerDetails from './Views/Teams/Players/PlayerDetails';
import Home from './Views/Teams/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/teams/:id">
          <TeamDetails />
        </Route> 
        <Route exact path="/players/:id">
          <PlayerDetails />
        </Route> 
        <Route exact path="/players">
          <PlayerList />
        </Route> 
        <Route exact path="/teams">
          <TeamList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
