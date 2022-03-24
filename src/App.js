import TeamList from './Views/Teams/TeamList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import TeamDetails from './Views/Teams/TeamDetails';



function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <Switch>
        <Route exact path="/teams/:id">
          <TeamDetails />
        </Route> 
        <Route exact path="/teamList">
          <TeamList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
