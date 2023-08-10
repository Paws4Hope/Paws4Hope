import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #f8f9fa;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const LeftWrapper = styled.div`
  width: 100%;
  height: inherit;
  background-color: var(--color-white);
`;

export const RightWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 430px;
  background-color: var(--color-white);
  padding: 34px 48px;
  margin: 16px;
  border-radius: 14px;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
`;

export const ButtonGoogle = styled.button`
  margin: 38px 0 24px 0;
  border: 1px solid var(--color-line-gray-100);
  border-radius: 4px;
  padding: 8px 48px;
  width: 100%;
  background: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    img {
      opacity: 0.6;
      transition: 0.2s ease;
      cursor: pointer;
    }
  }
`;

export const DivisionLine = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  &::before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    height: 1px;
    width: 100%;
    background-color: #e7e7e9;
  }
`;

export const DivisionText = styled.span`
  position: relative;
  z-index: 9;
  background-color: var(--color-white);
  font-size: 14px;
  padding: 0 18px;
  color: var(--color-line-gray);
`;

export const InputItem = styled.div`
  margin-top: 24px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-black);
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background-color: var(--color-line-gray-200);
  width: 100%;
  height: 42px;
  padding-left: 8px;
  border-radius: 4px;
`;

export const AuthLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--color-line-gray);
  margin-top: 32px;
`;

export const ButtonText = styled.button`
  position: relative;
  background-color: transparent;
  font-weight: 700;
  color: var(--color-black);
  text-decoration: underline;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.6;
    transition: 0.2s ease;
  }
`;
