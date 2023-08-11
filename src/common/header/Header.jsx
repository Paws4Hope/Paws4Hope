import * as S from './Header.styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import LogoutButton from '../login/LogoutButton';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const isLoginUser = useSelector((state) => state.user);

  return (
    <>
      <S.Header>
        <S.Gnb>
          <div>
            <img src={Logo} />
          </div>
          <S.Nav>
            <S.NavItem>임시보호소개</S.NavItem>
            <S.NavItem>동물소개</S.NavItem>
            <S.NavItem>입양후기</S.NavItem>
            <S.NavItem>커뮤니티</S.NavItem>
          </S.Nav>
        </S.Gnb>
        <S.Search placeholder="어떤게 궁금하신가요?" />
        <S.ButtonWrapper>
          {isLoginUser ? (
            <>
              <S.ProfileWrapper>
                <S.Avatar>
                  <img src={isLoginUser.photoURL} />
                </S.Avatar>
                <span>{isLoginUser.displayName}</span>
              </S.ProfileWrapper>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate('/login');
                }}
              >
                로그인
              </button>
              <LogoutButton />
            </>
          )}
        </S.ButtonWrapper>
      </S.Header>
    </>
  );
};

export default Header;
