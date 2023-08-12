import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  padding: 11px 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 6px;
  font-size: 16px;
  transition: all 0.3 ease;
  line-height: 1;

  &:hover {
    opacity: 0.8;
    transition: all 0.3 ease;
  }

  span {
    color: var(--color-gray);
    margin-right: 8px;
    margin-top: -4px;
  }

  ${(props) =>
    // Solid Button
    props.variant === 'solid' &&
    css`
      background-color: var(--color-${props.color});
      color: var(--color-white);
    `}

  ${(props) =>
    // outLine Button
    props.variant === 'outline' &&
    css`
      border: 1px solid var(--color-black);
      color: var(--color-black);
    `}

  ${(props) =>
    // text Button
    props.variant === 'text' &&
    css`
      width: 100%;
      text-align: center;
      color: var(--color-black);
      background-color: transparent;
      text-decoration: underline;
    `}

    ${(props) =>
    // Solid Button
    props.variant === 'textIcon' &&
    css`
      color: var(--color-${props.color});
    `}

  ${(props) =>
    // outLine Button
    props.size === 'Large' &&
    css`
      justify-content: center;
      width: 100%;
      height: 48px;
      border: 1px solid var(--color-${props.color});
      color: var(--color-white);
      margin-top: 24px;
    `}
`;
