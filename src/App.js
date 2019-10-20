import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import ShopPage from "./pages/shop/shop.component";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SignInSignUp}/>
        </Switch>
    </div>
  );
}

export default App;
