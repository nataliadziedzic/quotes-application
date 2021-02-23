/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allowPermission, denyPermission } from '../../../redux/actions/index';

const Login = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.userReducer);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isUserCorrect, setIsUserCorrect] = useState(false);
  const [isPassCorrect, setIsPassCorrect] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    username === loginData.username
      ? setIsUserCorrect(true)
      : setIsUserCorrect(false);
    password === loginData.password
      ? setIsPassCorrect(true)
      : setIsPassCorrect(false);
  }, [username, password]);

  const handleValidation = () => {
    if (username.length === 0 || password.length === 0) {
      username.length === 0 ? setIsUserCorrect(false) : setIsPassCorrect(false);
    }
    if (isUserCorrect && isPassCorrect) {
      dispatch(allowPermission());
    } else {
      dispatch(denyPermission());
      setError(true);
    }
  };

  const errors = {
    usernameErr: 'Incorrect username',
    passErr: 'Incorrect password',
  };
  const loginRef = useRef();
  useEffect(() => {
    loginRef.current.focus();
  }, []);

  return (
    <div className="loginBox">
      <h2 className="loginBox__description">You must login to see more</h2>
      <div className="loginBox__inputs">
        <label htmlFor="username">Username:</label>
        <input
          ref={loginRef}
          className="loginBox__input"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          className="loginBox__input"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="loginBox__btnContainer">
        <button
          onClick={handleValidation}
          className="loginBox__login"
          type="submit"
        >
          Log in
        </button>
        <Link to="/registration">
          <button type="button" className="loginBox__login">
            Not regitered yet?
          </button>
        </Link>
      </div>
      <div className="loginBox__errorBox">
        {error && (
          <>
            {!isUserCorrect && (
              <span className="loginBox__errMessage">{errors.usernameErr}</span>
            )}
            {!isPassCorrect && (
              <span className="loginBox__errMessage">{errors.passErr}</span>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Login;
