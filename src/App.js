import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

import Homepage from "./components/pages/homepage.component";

const HotsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/hats' component={HotsPage}/>
        </Switch>
    </div>
  );
}

export default App;
