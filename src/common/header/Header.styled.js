import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoutButton from '../login/LogoutButton';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--global-inner);
  margin: 0 auto;
  margin-top: 28px;
`;

export const Gnb = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const NavItem = styled(Link)`
  font-size: 18px;
  color: var(--color-black);
  list-style: none;
  text-decoration: none;
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const BaiscButtonWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Search = styled.input`
  background-color: #f4f4f4;
  color: #858585;
  padding: 8px 28px;
  border-radius: 4px;
`;

export const ProfileWrapper = styled.a`
  display: flex;
  align-items: center;

  & span {
    font-size: 18px;
    margin-left: 10px;
  }
`;

export const Menu = styled.div`
  position: absolute;
  z-index: 99;
  background-color: var(--color-white);
  right: 0;
  border-radius: 8px;
  display: none;
  width: 140px;
  margin-top: 14px;
  overflow: hidden;

  &.active {
    display: inline-block;
    box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.1);
  }

  & li {
    width: 100%;
    padding: 12px 14px;
    list-style: none;

    &:hover {
      background-color: var(--color-gray-400);
    }

    & ${NavItem} {
      font-size: 16px;

      &:hover {
        opacity: 0.6;
      }
    }

    & button {
      font-size: 16px;
      padding: 0;
    }
  }

  & ul:first-child {
    padding-top: 6px;
  }
  & ul:last-child {
    padding-bottom: 2px;
  }
`;

export const Avatar = styled.figure`
  width: 48px;
  height: 48px;
  border-radius: 30px;
  overflow: hidden;
  background-color: var(--color-gray-100);

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
