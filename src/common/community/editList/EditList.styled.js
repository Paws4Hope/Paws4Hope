import styled from 'styled-components';

export const contentForm = styled.form`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  max-width: var(--global-inner-content);
  margin: 0 auto;
  padding: 220px 0 32px;
`;

export const InputTitle = styled.input`
  width: 100%;
  font-size: 42px;
  font-weight: 300;
  border: none;
  outline: none;
  overflow: hidden;
  resize: none;
`;

export const Line = styled.div`
  content: '';
  height: 1px;
  background-color: var(--color-gray-100);
  width: 100%;
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--global-inner-content);
  margin: 0 auto;
  padding-top: 70px;
`;

export const InputDescription = styled.textarea`
  width: 100%;
  height: 500px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.6;
  border: none;
  outline: none;
  resize: none;
`;

export const BottomAppBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 72px;
  border-top: 1px solid #ededed;
  display: flex;
  align-items: center;
`;

export const AppBarInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: var(--global-inner-content);
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const UtilImage = styled.a`
  position: absolute;
  font-size: 28px;
  top: 24px;
  cursor: pointer;
  color: var(--color-gray-900);

  &:hover {
    color: var(--color-gray-600);
    background-color: var(--color-gray-200);
    border-radius: 3px;
    /* opacity: 0.6; */
    transition: all 0.3 ease;
  }
`;
