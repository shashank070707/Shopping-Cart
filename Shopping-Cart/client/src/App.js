import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Userlogin from './components/Userlogin';
import Ownerlogin from './components/Ownerlogin';
import Userregister from './components/Userregister';
import Ownerregister from './components/Ownerregister';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Userlogout from './components/Userlogout';
import Ownerlogout from './components/Ownerlogout';
import OAccount from './components/OAccount';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Uaccount from './components/Uaccount';
import Error from './components/Error';
import Success from './components/Success';
import Uforget from './components/Uforget';
import Oforget from './components/Oforget';

const Router = () => {

  return (
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/userlogin">
        <Userlogin />
      </Route>

      <Route exact path="/ownerlogin">
        <Ownerlogin />
      </Route>

      <Route exact path="/userregister">
        <Userregister />
      </Route>

      <Route exact path="/ownerregister">
        <Ownerregister />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

      <Route exact path="/shop">
        <Shop />
      </Route>

      <Route exact path="/shop/:cate">
        <Shop />
      </Route>

      <Route exact path="/uaccount">
        <Uaccount />
      </Route>

      <Route exact path="/userlogout">
        <Userlogout />
      </Route>

      <Route exact path="/ownerlogout">
        <Ownerlogout />
      </Route>

      <Route exact path="/oaccount">
        <OAccount />
      </Route>

      <Route exact path="/cart">
        <Cart />
      </Route>

      <Route exact path="/success">
        <Success />
      </Route>

      <Route exact path="/uforget">
        <Uforget />
      </Route>

      <Route exact path="/oforget">
        <Oforget />
      </Route>

      <Route>
        <Error/>
      </Route>

    </Switch>
  )
}

const App = ()=>{

  return(
    <> 
      <Navbar/>
      <Router/>
      <Footer/> 
    </>
  )
}

export default App;