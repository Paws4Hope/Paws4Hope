import { styled } from 'styled-components';

export const PageTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 8px;
`;

export const Layout = styled.div`
  width: 100%;
  max-width: var(--global-inner-content);
  margin: 0 auto;
  padding-top: 135px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--color-black-300);

  & button {
    font-size: 16px;

    & span {
      /* color: var(--color-black); */
      font-size: 18px;
      margin-right: 6px;
    }
  }
`;

export const ThumbNail = styled.figure`
  width: 100%;
  height: 300px;
  border-radius: 30px;
  background-color: var(--color-gray-400);
  margin-top: 24px;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: var(--color-black);
  margin-top: 14px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  margin-top: 11px;
`;

export const AvatarFigure = styled.figure`
  width: 48px;
  height: 48px;
  border-radius: 30px;
  background-color: var(--color-gray-400);
  margin-right: 8px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
`;

export const DisplayName = styled.li`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--color-black);
`;

export const Time = styled.li`
  font-size: 14px;
  color: var(--color-gray);
`;

export const Content = styled.p`
  font-size: 18px;
  color: var(--color-black);
  margin-top: 48px;
  line-height: 1.6;
`;

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
