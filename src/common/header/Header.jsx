import * as S from './Header.styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import LogoutButton from '../login/LogoutButton';
import { useSelector } from 'react-redux';
import { Button } from '../../components';
const Header = () => {
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.user);

  return (
    <>
      <S.Header>
        <S.Gnb>
          <div>
            <img src={Logo} />
          </div>
          <S.Nav>
            <S.NavItem to="/adoption-process">입양절차</S.NavItem>
            <S.NavItem to="/pets">동물소개</S.NavItem>
            <S.NavItem>입양후기</S.NavItem>
            <S.NavItem to="/community">커뮤니티</S.NavItem>
          </S.Nav>
        </S.Gnb>
        <S.Search placeholder="어떤게 궁금하신가요?" />
        <S.ButtonWrapper>
          {loginUser.isLogin ? (
            <>
              <S.ProfileWrapper
                onClick={() => {
                  navigate('/mypage');
                }}
              >
                <S.Avatar>
                  <img src={loginUser.photoURL} />
                </S.Avatar>
                <span>{loginUser.displayName}</span>
              </S.ProfileWrapper>
            </>
          ) : (
            <>
              <Button
                onClick={() => {
                  navigate('/login');
                }}
              >
                로그인
              </Button>
              <Button
                variant="solid"
                color="black"
                onClick={() => {
                  navigate('/signup');
                }}
              >
                회원가입
              </Button>
            </>
          )}
        </S.ButtonWrapper>
      </S.Header>
    </>
  );
};

export default Header;
