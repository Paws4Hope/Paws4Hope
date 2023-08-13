import styled from 'styled-components';

export const Layout = styled.ul`
  width: 100%;
  max-width: var(--global-inner);
  margin: 0 auto;
`;

export const PetsLayout = styled.ul`
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

export const ButtonInterest = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 16px;
  top: 16px;
  color: var(--color-white);
  transition: 0.5 ease;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--color-white);
  border-radius: 30px;
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
