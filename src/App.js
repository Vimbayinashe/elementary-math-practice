import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/home/Header';
import Home from './components/home/Home';
import SelectGame from './components/game/SelectGame';
import Play from './components/game/Play';
import Results from './components/general/Results';

function App() {

    const [level, setLevel] = useState('');
    const [gameMethod, setGameMethod] = useState('');
    const [results, setResults] = useState({});


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

            <Route path="/play">
                <Play gameMethod={gameMethod} 
                    level={level}
                    results={results}
                    setResults={setResults}/>
            </Route>

            <Route path="/results">
                <Results results={results}/>
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
