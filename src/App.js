import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import InGame from './components/game/InGame';
import InMenu from './components/menu/InMenu';

import PauseMenu from './components/game/PauseMenu';
import PauseMenuMain from './components/game/PauseMenuMain';
import PauseMenuLoad from './components/game/PauseMenuLoad';
import PauseMenuSave from './components/game/PauseMenuSave';
import PauseMenuExit from './components/game/PauseMenuExit';
import InMenuMain from './components/menu/InMenuMain';

import "./App.scss";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<InMenu />}>
              <Route path="" element={<InMenuMain />} />
              <Route path="load" element={<PauseMenuLoad />} />
            </Route>
            <Route path="game" element={<InGame />}>
              <Route path="menu" element={<PauseMenu />}>
                <Route path="" element={<PauseMenuMain />} />
                <Route path="load" element={<PauseMenuLoad />} />
                <Route path="save" element={<PauseMenuSave />} />
                <Route path="exit" element={<PauseMenuExit />} />
              </Route>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
