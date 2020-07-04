import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/home/Header';
import Home from './components/home/Home';

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
            
            <Route exact path="/">
                <Home/>
            </Route>
        </Switch>
        </main>

    </Router>
  );
}

export default App;
