import styled from 'styled-components';

export const CommentLayout = styled.div`
  margin-top: 200px;
`;

export const CommentTitle = styled.p`
  font-size: 24px;
  color: var(--color-black);
  margin-bottom: 10px;
  & span {
    margin-left: 6px;
  }
`;

export const ProfileUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 8px;
`;

export const ProfileTime = styled.li`
  font-size: 12px;
  color: var(--color-gray);
`;

export const Comment = styled.p`
  font-size: 16px;
  color: var(--color-black);
`;

export const CommentProfileWrapper = styled.div`
  display: flex;
  margin-top: 11px;
  align-items: center;
  padding: 28px 18px;
  border-bottom: 1px solid var(--color-line-gray-100);
`;

export const CommentInner = styled.div`
  border-top: 1px solid var(--color-black);
`;

export const CommentForm = styled.form`
  margin-bottom: 60px;
  margin-top: 24px;
  position: relative;

  & button {
    position: absolute;
    bottom: 24px;
    right: 20px;
  }
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 160px;
  border: 1px solid var(--color-line-gray-100);
  resize: none;
  padding: 24px;
  font-size: 16px;

  &::placeholder {
    color: var(--color-gray);
  }

  &:focus {
    outline-color: var(--color-gray-500);
  }
`;

export const AvatarFigure = styled.figure`
  width: 48px;
  height: 48px;
  border-radius: 30px;
  background-color: var(--color-gray-400);
  margin-right: 8px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DisplayName = styled.li`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--color-black);
`;

export const noneCommentMessage = styled.p`
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
  padding: 28px 18px;
  border-bottom: 1px solid var(--color-line-gray-100);

  & span {
    font-size: 16px;
    color: var(--color-gray);
  }
`;
