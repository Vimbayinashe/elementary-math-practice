import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/home/Header';
import Home from './components/home/Home';
import SelectGame from './components/game/SelectGame';

function App() {
  return (
    <Router className="App">

        <Switch>
            <Route path="/">
                <Header/>
            </Route>
        </Switch>

        <main>
        <Switch>

            <Route path="/game">
                <SelectGame />
            </Route>

            <Route exact path="/">
                <Home/>
            </Route>
        </Switch>
        </main>

    </Router>
  );
}

export default App;
