import React from 'react';
import '../Styles/style-components/main.scss';
import Header from './Header';
import HomePage from './HomePage';
import Start from './Start';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import Registration from './Registration';
import ToughTasks from './ToughTasks'
import EasyTasks from './EasyTasks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [permission, setPermission] = useState(false)
  const loginData = {
    user: '',
    password: ''
  }

  return (
    <Router>
      <div className="App">
        <header className='header'>{<Header />}</header>
        <main>
          <Route path='/quotes-application/' exact render={() => <HomePage permission={permission} />} />
          <Route path='/quotes-application/start' render={() => <Start permission={permission} />} />
          <Route path='/quotes-application/login' render={() => <Login permission={permission} setPermission={setPermission} loginData={loginData} />} />
          <Route path='/quotes-application/registration' render={() => <Registration loginData={loginData} />} />
          <Route path='/quotes-application/contact' render={() => <Contact />} />
          <Route path='/quotes-application/tough' render={() => <ToughTasks />} />
          <Route path='/quotes-application/easy' render={() => <EasyTasks />} />
          <div className="opacity"></div>
        </main>
        <footer className='footer'>{< Footer />}</footer>
      </div>
    </Router >
  );
}

export default App;
