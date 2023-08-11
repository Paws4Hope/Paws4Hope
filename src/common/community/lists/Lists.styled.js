import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  max-width: var(--global-inner-content);
  margin: 0 auto;
`;

export const CardInner = styled.div`
  margin-top: 60px;
`;

export const CardList = styled.div`
  & :first-child {
    padding-top: 0;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  align-items: center;
  padding: 36px 0;
  border-bottom: 1px solid var(--color-gray-200);
`;

export const Content = styled.div`
  padding-right: 18px;
`;

export const PageTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 36px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 23px;
  color: var(--color-gray-300);
  margin-bottom: 18px;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;

export const IconWrapper = styled.ul`
  display: flex;
  gap: 20px;

  & :last-child {
    &::after {
      display: none;
    }
  }
`;

export const Item = styled.li`
  position: relative;
  font-size: 14px;
  line-height: 1;
  color: var(--color-gray-700);
  list-style: none;

  &::after {
    position: absolute;
    content: '';
    width: 4px;
    height: 4px;
    top: 4px;
    border-radius: 10px;
    margin-left: 8px;
    background-color: var(--color-gray-500);
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;

  & button {
    color: var(--color-gray-300);
  }
`;

export const Figure = styled.figure`
  width: 168px;
  height: 110px;
  background-color: var(--color-gray-400);
  overflow: hidden;
  border-radius: 20px;
`;

export const ThumbNail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonText = styled.button`
  text-decoration: underline;
`;
