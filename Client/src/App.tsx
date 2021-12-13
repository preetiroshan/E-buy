import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import HomePage from './components/screens/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import BookScreen from './components/screens/BookScreen'
import CartScreen from './components/screens/CartScreen';
import About from './components/About';
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      {/* <Login /> */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/book/:name" component={BookScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/cart" component={CartScreen} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>

  );
}

export default App;
