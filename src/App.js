import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import Played from './components/Played';
import PlayedList from './components/PlayedList';
import './App.css';

import { GameProvider } from './context/GameContext';

const App = () => {

  return (

    <div className = "GAME">

      <GameProvider >

          <Router>

            <Header />

            <Switch>

              <Route exact path = "/">
                <Home />
              </Route>

              <Route exact path = "/playedlist">
                <PlayedList />
              </Route>

              <Route exact path = "/played">
                <Played />
              </Route>

              <Route exact path = "/add">
                <Add />
              </Route>

            </Switch>

          </Router>
        
      </GameProvider>

    </div>
  );

}

export default App;
