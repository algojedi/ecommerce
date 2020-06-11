import React from 'react'
import Header from './components/header/header'
import HomePage from './pages/home-page/home-page'
import HatsPage from './pages/hats-page/hats-page'
import Footer from './components/footer/footer'
import { Switch, Route } from 'react-router-dom'
import Shop from './pages/shop-page/shop';
import SignInRegisterPage from './pages/sign-in-register/sign-in-register';

function App() {
    return (
        <React.Fragment>
            <Header />
            <Switch>
            <Route exact path='/' component= {HomePage} />
            <Route path='/hats' component= {HatsPage} />
            <Route path='/shop' component={Shop} />
            <Route path='/signin' component={SignInRegisterPage} />
            </Switch>
           <Footer/> 
        </React.Fragment>
    )
}

export default App
