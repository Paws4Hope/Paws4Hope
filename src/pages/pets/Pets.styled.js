import styled from 'styled-components';

export const BlogPostListContainer = styled.ul`
  .my-masonry-grid {
    display: flex;
    margin-left: -1.875em;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 1.875em;
    background-clip: padding-box;
  }
  .my-masonry-grid_column > li {
    margin-bottom: 3.125em;
  }
`;
