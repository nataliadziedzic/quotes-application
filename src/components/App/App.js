import React from 'react';
import { HashRouter as Router, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../styles/main/main.scss';
import Header from '../Header/Header';
import HomePage from '../Home/Home';
import Start from '../Start/Start';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Login from '../Authentication/Login/Login';
import Registration from '../Authentication/Registration/Registration';
import Tasks from '../Tasks/Tasks';

const App = () => {
  const authed = useSelector((state) => state.permissionReducer);

  return (
    <Router basename="/">
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/start" render={() => <Start />} />
          <Route exact path="/login">
            {authed ? <Redirect to="/start" /> : <Login />}
          </Route>
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
};

export default App;
