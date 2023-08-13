import * as S from './Header.styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import LogoutButton from '../login/LogoutButton';
import { useSelector } from 'react-redux';
import { Button } from '../../components';

const Header = () => {
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.user);
  const [isClicked, setIsClicked] = useState(false);
  const toggleClassName = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <S.Header>
        <S.Gnb>
          <div>
            <img src={Logo} />
          </div>
          <S.Nav>
            <S.NavItem to="/pets">동물찾기</S.NavItem>
            <S.NavItem to="/community">커뮤니티</S.NavItem>
          </S.Nav>
        </S.Gnb>

        {/* <S.Search placeholder="어떤게 궁금하신가요?" /> */}

        <S.ButtonWrapper>
          {loginUser.isLogin ? (
            <>
              <S.ProfileWrapper onClick={toggleClassName}>
                <S.Avatar>
                  <img src={loginUser.photoURL} />
                </S.Avatar>
                <span>{loginUser.displayName}</span>
              </S.ProfileWrapper>
              <S.Menu className={`${isClicked ? 'active' : ''}`}>
                <ul>
                  <li>
                    <S.NavItem to="/mypage">마이페이지</S.NavItem>
                  </li>
                  <li>
                    <S.NavItem>관심동물</S.NavItem>
                  </li>
                </ul>
                <ul>
                  <li>
                    <LogoutButton />
                  </li>
                </ul>
              </S.Menu>
            </>
          ) : (
            <>
              <S.BaiscButtonWrapper>
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
              </S.BaiscButtonWrapper>
            </>
          )}
        </S.ButtonWrapper>
      </S.Header>
    </>
  );
};

export default Header;
