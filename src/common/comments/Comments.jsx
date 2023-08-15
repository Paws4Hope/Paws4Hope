import { useSelector } from 'react-redux';
import { Button } from '../../components';
import * as S from './Comments.styled';
import React, { useEffect, useState } from 'react';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getComments, addComments, deleteComments, updateComments } from '../../api/commentsApi';
import moment from 'moment';
import useInput from '../../hooks/useInput';
import { nanoid } from 'nanoid';

const Comments = ({ postId }) => {
  //로그인 유저
  const loginUser = useSelector((state) => state.user);

  // 파이어베이스 댓글 조회
  const { data: comments, isLoading, isError, error } = useQuery(['commentsData'], getComments);
  const filteredComments = comments?.filter((comment) => comment.postId === postId);

  const nowTime = moment().format('YYYY-MM-DD');

  // 댓글 수정
  const [isEditing, setIsEditing] = useState(false);
  const [editComment, setEditComment] = useState('');

  const handleEditComment = (e) => {
    e.preventDefault();
    setEditComment(e.target.value);
  };
  // state
  const initialState = {
    content: ''
  };
  const [{ content }, onChange, reset] = useInput(initialState);

  const queryClient = useQueryClient();

  // 파이어베이스 등록
  const addComment = useMutation(addComments, {
    onSuccess: () => {
      queryClient.invalidateQueries(['commentsData']);
    }
  });

  const handleAdd = async (e) => {
    e.preventDefault();

    const newComment = {
      id: nanoid(),
      postId: postId,
      uid: loginUser.uid,
      author: loginUser.displayName,
      avatar: loginUser.photoURL,
      content,
      time: nowTime
    };

    await addComment.mutate(newComment);
    reset();
  };

  // 파이어베이스 삭제
  const deleteComment = useMutation(deleteComments, {
    onSuccess: () => {
      queryClient.invalidateQueries(['commentsData']);
    }
  });

  const handleDelete = async (id) => {
    await deleteComment.mutate(id);
  };

  // 파이어베이스 수정
  const updateComment = useMutation(updateComments, {
    onSuccess: () => {
      queryClient.invalidateQueries(['commentsData']);
    }
  });

  const handleUpdate = async (comment) => {
    const editedData = {
      ...comment,
      content: editComment
    };

    setIsEditing(false);
    await updateComment.mutate({ targetId: comment.id, editedComment: editedData });
  };

  const onEditComment = (content) => {
    setIsEditing(true);
    setEditComment(content);
  };

  const confirmUser = () => {
    if (loginUser.isLogin) {
      return null;
    } else {
      return alert('로그인 후 이용해주세요');
    }
  };

  if (isError) {
    return console.log('firebase Error : ', error.code);
  }

  return (
    <>
      <S.CommentLayout>
        <S.CommentTitle>
          댓글<span>{filteredComments?.length}개</span>
        </S.CommentTitle>
        {/* 댓글 레이아웃 */}
        <S.CommentInner>
          {/* 댓글 */}

          {filteredComments?.length ? (
            <>
              {filteredComments?.map((comment) => {
                return (
                  <>
                    <S.CommentProfileWrapper key={comment.id}>
                      <div>
                        <S.AvatarFigure>
                          <img src={comment.avatar} />
                        </S.AvatarFigure>
                        <div>
                          <S.ProfileUl>
                            <S.DisplayName>{comment.author}</S.DisplayName>
                            <S.ProfileTime>{comment.time}</S.ProfileTime>
                          </S.ProfileUl>
                          <S.Comment>{comment.content}</S.Comment>
                        </div>

                        {isEditing ? null : (
                          <div>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                onEditComment(comment.content);
                              }}
                            >
                              수정
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                handleDelete(comment.id);
                              }}
                            >
                              삭제
                            </button>
                          </div>
                        )}
                      </div>

                      {isEditing ? (
                        <S.CommentForm
                          onSubmit={() => {
                            handleUpdate(comment);
                          }}
                        >
                          <S.Textarea required value={editComment} onChange={handleEditComment}></S.Textarea>
                          <Button variant="solid" color="black">
                            수정
                          </Button>
                        </S.CommentForm>
                      ) : null}
                    </S.CommentProfileWrapper>
                  </>
                );
              })}
            </>
          ) : (
            <>
              <S.noneCommentMessage>
                작성된 댓글이 없습니다. <br />
                <span>첫 댓글을 남겨주세요!</span>
              </S.noneCommentMessage>
            </>
          )}

          {/* 텍스트 입력창 */}

          {loginUser.isLogin ? (
            <S.CommentForm onSubmit={handleAdd}>
              <S.Textarea
                required
                placeholder="댓글을 입력해보세요!"
                name="content"
                value={content}
                onChange={onChange}
              ></S.Textarea>
              <Button variant="solid" color="black">
                등록
              </Button>
            </S.CommentForm>
          ) : (
            <S.CommentForm onClick={confirmUser}>
              <S.Textarea placeholder="로그인하고 댓글을 입력해보세요!" disabled></S.Textarea>
            </S.CommentForm>
          )}
        </S.CommentInner>
      </S.CommentLayout>
    </>
  );
};

export default Comments;
