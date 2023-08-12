import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Container;
