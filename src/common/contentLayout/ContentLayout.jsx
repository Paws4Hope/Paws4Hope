import React from 'react';
import * as S from './ContentLayout.styled';
import { Outlet } from 'react-router-dom';

function ContentLayout() {
  return (
    <S.ContentLayout>
      <Outlet />
    </S.ContentLayout>
  );
}

export default ContentLayout;
