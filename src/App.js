import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/home/Header';
import Home from './components/home/Home';
import SelectGame from './components/game/SelectGame';

function App() {

    const [level, setLevel] = useState('');
    const [gameMethod, setGameMethod] = useState('');

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
                <SelectGame gameMethod={gameMethod} 
                    setGameMethod={setGameMethod}
                    level={level}
                    setLevel={setLevel}/>
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
