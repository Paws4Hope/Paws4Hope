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
