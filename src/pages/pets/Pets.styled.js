import styled from 'styled-components';

export const Layout = styled.ul`
  width: 100%;
  max-width: var(--global-inner);
  margin: 0 auto;
`;

export const PetsLayout = styled.ul`
  margin-top: 32px;
  .my-masonry-grid {
    display: flex;

    width: auto;

    & :first-child {
      margin-left: 0;
    }
  }
  .my-masonry-grid_column {
    background-clip: padding-box;
    margin-left: 16px;
  }
  .my-masonry-grid_column > li {
    list-style: none;
    margin-bottom: 16px;
  }
`;

export const PetWrapper = styled.div`
  position: relative;
`;

export const Figure = styled.figure`
  display: grid;
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

export const PetThumbNail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const IsButtonInterest = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 48px;
  margin-top: 24px;
  color: var(--color-white);
  transition: 0.5 ease;
  background-color: #ffc056;
  border-radius: 8px;
  padding: 6px;

  & img {
    width: 20px;
    height: 20px;
    -webkit-filter: invert(0); /* safari 6.0 - 9.0 */
    filter: invert(0);
    transition: 0.5 ease;
  }
`;

export const SubTitle = styled.span`
  color: var(--color-black);
  display: flex;
  align-items: center;
`;

export const ButtonInterest = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 48px;
  margin-top: 24px;
  color: var(--color-white);
  transition: 0.5 ease;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  padding: 6px;

  &.active {
    background-color: #ffc056;

    & img {
      -webkit-filter: invert(0); /* safari 6.0 - 9.0 */
      filter: invert(0);
      transition: 0.5 ease;
    }
  }

  & img {
    width: 20px;
    height: 20px;
    transition: 0.5 ease;
    -webkit-filter: invert(1); /* safari 6.0 - 9.0 */
    filter: invert(1);
  }
`;

export const DialogLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & img {
    width: 100%;
  }
`;

export const DialogContent = styled.div`
  padding: 32px;

  & h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  & p {
    font-size: 18px;
    display: flex;
    align-items: center;
    margin-bottom: 14px;

    & span {
      margin-top: -2px;
      margin-right: 8px;
    }
  }
`;

export const DialogLeft = styled.div`
  display: grid;
  align-items: center;
  border-right: 1px solid var(--color-line-gray-100);
  background-color: var(--color-line-gray-200);
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  /* color: var(--color-white); */
  transition: 0.5 ease;
  padding: 10px;
  border-radius: 30px;
  font-size: 32px;

  &:hover {
    background-color: var(--color-line-gray-200);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonSelectWrapper = styled.div`
  display: flex;
  margin: 12px 0;
`;

export const Button = styled.a`
  display: flex;
  background-color: var(--color-black);
  align-items: center;
  justify-content: center;
  border: none;
  padding: 11px 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 6px;
  font-size: 16px;
  transition: all 0.3 ease;
  line-height: 1;
  width: 100%;
  height: 48px;
  color: var(--color-white);
  margin-top: 24px;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: all 0.3 ease;
  }

  span {
    color: var(--color-gray);
    margin-right: 8px;
    margin-top: -4px;
  }
`;
