import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/screens/Login/Login';
import HomePage from './components/screens/Home/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/screens/Register/Register';
import CartScreen from './components/screens/Cart/CartScreen';
import About from './components/screens/About/About';
import Contact from './components/Contact/Contact'
import BookScreen from './components/screens/BookScreen/BookScreen';

const App = () => {
  return (
    <>
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
