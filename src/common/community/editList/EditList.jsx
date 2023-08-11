import * as S from './EditList.styled';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getLists, updateList } from '../../../api/lists';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useInput from '../../../hooks/useInput';
import { Button } from '../../../components';

const EditList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery(['posts'], getLists);

  const targetPost = data.find((item) => {
    return item.id === id;
  });

  const initialState = {
    title: targetPost.title,
    content: targetPost.content
  };

  const [{ title, content }, onChange] = useInput(initialState);

  // 쿼리!!
  const queryClient = useQueryClient();

  const mutation = useMutation(updateList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });

  const onEditHandler = (e) => {
    e.preventDefault();

    const editedPost = {
      ...targetPost,
      title,
      content
    };

    mutation.mutate({ targetId: targetPost.id, editedPost });
    navigate('/community');
  };

  return (
    <>
      <S.contentForm onSubmit={onEditHandler}>
        <S.TitleWrapper>
          <S.InputTitle type="text" name="title" value={title} onChange={onChange} />
        </S.TitleWrapper>

        <S.Line />

        <S.DescriptionWrapper>
          <S.UtilImage className="material-symbols-outlined">image</S.UtilImage>
          <S.InputDescription type="textarea" name="content" value={content} onChange={onChange} />
        </S.DescriptionWrapper>

        <S.BottomAppBar>
          <S.AppBarInner>
            <Button variant="textIcon" color="gray">
              <span className="material-symbols-outlined">west</span>
              나가기
            </Button>
            <Button variant="solid" color="black">
              수정하기
            </Button>
          </S.AppBarInner>
        </S.BottomAppBar>
      </S.contentForm>
    </>
  );
};

export default EditList;
