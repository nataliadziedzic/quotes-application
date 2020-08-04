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
          <Route path='/' exact render={() => <HomePage permission={permission} />} />
          <Route path='/start' render={() => <Start permission={permission} />} />
          <Route path='/login' render={() => <Login permission={permission} setPermission={setPermission} loginData={loginData} />} />
          <Route path='/registration' render={() => <Registration loginData={loginData} />} />
          <Route path='/contact' render={() => <Contact />} />
          <Route path='/tough' render={() => <ToughTasks />} />
          <Route path='/easy' render={() => <EasyTasks />} />
          <div className="opacity"></div>
        </main>
        <footer className='footer'>{< Footer />}</footer>
      </div>
    </Router >
  );
}

export default App;
