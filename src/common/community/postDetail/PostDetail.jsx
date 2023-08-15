import * as S from './postDetail.styled';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getLists } from '../../../api/lists';
import { Button } from '../../../components';
import { useSelector } from 'react-redux';
import Comments from '../../comments/Comments';

const PostDetail = () => {
  const { id } = useParams();
  const { data, status } = useQuery(['posts'], getLists);
  const findPost = data?.find((post) => post.id === id);

  const loginUser = useSelector((state) => state.user);

  const navigate = useNavigate();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>Error fetching data</p>;
  }

  if (!findPost) {
    return <div>No Post found with the provided id</div>;
  }

  return (
    <>
      <S.Layout>
        {/* <S.TitleWrapper>
          <S.PageTitle>커뮤니티</S.PageTitle>
          <Button
            variant="textIcon"
            color="gray"
            onClick={() => {
              navigate('/community');
            }}
          >
            <span className="material-symbols-outlined">west</span>
            목록보기
          </Button>
        </S.TitleWrapper> */}
        <div>
          <S.ThumbNail>
            <img src={findPost.thumbNail} />
          </S.ThumbNail>
          <S.Title>{findPost.title}</S.Title>
          <S.ProfileWrapper>
            <S.AvatarFigure>
              <img src={findPost.avatar} alt="" />
            </S.AvatarFigure>
            <S.Ul>
              <S.DisplayName>{findPost.author}</S.DisplayName>
              <S.Time>{findPost.time}</S.Time>
            </S.Ul>
          </S.ProfileWrapper>

          <S.Content>{findPost.content}</S.Content>
        </div>

        <Comments postId={id} />
      </S.Layout>
    </>
  );
};

export default PostDetail;
