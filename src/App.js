import TeamList from './Views/Teams/TeamList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';



function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <Switch>
        <Route exact path="/teamList">
          <TeamList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
