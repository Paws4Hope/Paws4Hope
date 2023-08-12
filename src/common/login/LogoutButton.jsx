// src/components/LogoutButton.js
import React from 'react';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { Button } from '../../components';

function LogoutButton() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('로그아웃 성공');
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
  };

  return <Button onClick={handleLogout}>로그아웃</Button>;
}

export default LogoutButton;
