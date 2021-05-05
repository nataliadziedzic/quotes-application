import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoginData } from '../../../redux/actions/index';
import { useAuthenticationContext } from '../../../context/AuthenticationContext';
import { errors } from '../../../variables';

const Regiatration = () => {
  const dispatch = useDispatch();
  const authenticationContext = useAuthenticationContext();
  const [email, setEmail] = useState('');
  const [isEmailCorrect, setIsEmailCorrect] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [isUserCorrect, setIsUserCorrect] = useState(false);
  const [isAllCorrect, setIsAllCorrect] = useState(false);

  const handleSetUsername = (e) => {
    const userInput = e.target.value;
    authenticationContext.setUsername(userInput);
    if (userInput.length < 2) {
      setIsUserCorrect(false);
    } else setIsUserCorrect(true);
  };

  const handleSetEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    const emailValidation = new RegExp(/^[\w._-]+@([\w-]+\.)+[\w]{2,4}$/);
    const validation = emailValidation.test(emailInput);
    if (validation) setIsEmailCorrect(true);
    else setIsEmailCorrect(false);
  };

  const handleSetPassword = (e) => {
    const passInput = e.target.value
    authenticationContext.setPassword(passInput)
    if (passInput.length < 6) {
      setIsPasswordCorrect(false)
    } else setIsPasswordCorrect(true)
  };
  const handleValidation = () => {
    if ( isUserCorrect && isPasswordCorrect && isEmailCorrect) {
        setIsAllCorrect(true)
        dispatch(setLoginData(authenticationContext.username,authenticationContext.password)
      );
    } else {
      setIsAllCorrect(false);
      document
        .querySelector('.registerBox__errorBox')
        .classList.add('registerBox__errorBox--show')
    }
  };
  useEffect(handleValidation, [isUserCorrect, isEmailCorrect, isPasswordCorrect,]);

  const usernameRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="registerBox">
      <h2 className="registerBox__description">Sign up</h2>
      <div className="registerBox__inputs">
        <label className="registerBox__label" htmlFor="username">
          Username:
        </label>
        <input
          id="username"
          ref={usernameRef}
          className="registerBox__input"
          type="text"
          name="username"
          value={authenticationContext.username}
          onChange={handleSetUsername}
        />
        <br />
        <label className="registerBox__label" htmlFor="email" id="email">
          E-mail:
        </label>
        <input
          className="registerBox__input"
          type="text"
          name="email"
          value={email}
          onChange={handleSetEmail}
        />
        <br />
        <label className="registerBox__label" htmlFor="password">
          Password:
        </label>
        <input
          className="registerBox__input"
          type="password"
          name="password"
          value={authenticationContext.password}
          onChange={handleSetPassword}
        />
      </div>
      <div className="registerBox__btnContainer">
        <Link to={isAllCorrect ? '/start' : '/registration'}>
          <button onClick={handleValidation} className="loginBox__register">
            Sign up
          </button>
        </Link>
        <Link to="/login">
          <button className="registerBox__register"> Back to login</button>
        </Link>
      </div>
      <div className="registerBox__errorBox">
        {!isUserCorrect && <span className="registerBox__errMessage">{errors.usernameError}</span>}
        {!isPasswordCorrect && <span className="registerBox__errMessage">{errors.passwordError}</span>}
        {!isEmailCorrect && <span className="registerBox__errMessage">{errors.emailError}</span>}
      </div>
    </div>
  );
};

export default Regiatration;
