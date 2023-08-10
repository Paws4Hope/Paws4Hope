import React from 'react';
import Login from '../../common/login/Login';
import LogoutButton from '../../common/login/LogoutButton';

const login = () => {
  return (
    <div>
      <Login />
      <LogoutButton />
    </div>
  );
};

export default login;
