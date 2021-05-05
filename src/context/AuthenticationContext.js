import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthenticationContext = createContext();
export const useAuthenticationContext = () => useContext(AuthenticationContext);

const AuthenticationContextProvider = ({ children }) => {
  AuthenticationContextProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthenticationContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
