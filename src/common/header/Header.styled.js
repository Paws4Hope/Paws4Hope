import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
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
