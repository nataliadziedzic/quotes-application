import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allowPermission, denyPermission } from '../../../redux/actions/index';
import { useAuthenticationContext } from '../../../context/AuthenticationContext';
import { errors } from '../../../variables';

const Login = () => {
  const dispatch = useDispatch();
  const authenticationContext = useAuthenticationContext();
  const {
    username,
    setUsername,
    setPassword,
    password,
  } = authenticationContext ? authenticationContext : {};
  const loginData = useSelector((state) => state.userReducer);
  const [isUserDataValid, setIsUserDataValid] = useState(false);
  const [error, setError] = useState(null);
  const loginRef = useRef();

  useEffect(() => {
    loginRef.current.focus();
  }, []);

  useEffect(() => {
    if(authenticationContext) {
      username === loginData.username && password === loginData.password 
        ? setIsUserDataValid(true) 
        : setIsUserDataValid(false);
    }
  }, [username, password, loginData]);

  const handleValidation = () => {
    if (username.length === 0 || password.length === 0) {
      setError(errors.emptyFieldError)
     return setIsUserDataValid(false);
    }
    if (isUserDataValid) {
      dispatch(allowPermission());
    } else {
      dispatch(denyPermission());
      setError(errors.loginError);
    }
  };

  return (
    <div className="loginBox">
      <h2 className="loginBox__description">You must login to see more</h2>
      <div className="loginBox__inputs">
        <label htmlFor="username">Username:</label>
        <input
          ref={loginRef}
          id="username"
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
          id="password"
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
        {error && <span className="loginBox__errMessage">{error}</span>}
      </div>
    </div>
  );
};
export default Login;
