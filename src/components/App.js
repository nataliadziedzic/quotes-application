import React from 'react';
import '../styles/style-components/main.scss';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Start from './Start';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import Registration from './Registration';
import Tasks from './Tasks';

const App = () => (
  <Router basename="/">
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <main>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/start" render={() => <Start />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/registration" render={() => <Registration />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/tasks" render={() => <Tasks />} />
        <div className="opacity" />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  </Router>
);

export default App;
