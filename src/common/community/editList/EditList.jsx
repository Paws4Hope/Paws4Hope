import * as S from './EditList.styled';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editList } from '../../../redux/modules/lists';
import { Button } from '../../../components';

const EditList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log('id', id);

  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

  const targetList = lists.find((item) => {
    return item.id === id;
  });

  console.log('targetList', targetList);
  //
  const [editTitle, setEditTitle] = useState(targetList.title);
  const [editGuardian, setEditGuardian] = useState(targetList.guardian);
  const [editCompanionAnimal, setEditCompanionAnimal] = useState(targetList.companionAnimal);
  const [editComments, setEditComments] = useState(targetList.comments);

  //

  const onEditHandler = () => {
    const editedList = {
      id: targetList.id,
      img: '',
      title: editTitle,
      guardian: editGuardian,
      companionAnimal: editCompanionAnimal,
      comments: editComments
    };
    dispatch(editList(editedList));
  };

  return (
    <>
      <S.contentForm
        onSubmit={(e) => {
          e.preventDefault();
          onEditHandler();
          navigate('/community');
        }}
      >
        <S.TitleWrapper>
          <S.InputTitle
            type="text"
            value={editTitle}
            onChange={(e) => {
              setEditTitle(e.target.value);
            }}
          />
        </S.TitleWrapper>

        <S.Line />

        {/* <div>
          <span>
            보호자:{' '}
            <input
              type="text"
              value={editGuardian}
              onChange={(e) => {
                setEditGuardian(e.target.value);
              }}
            />
          </span>

          <span>
            반려동물:{' '}
            <input
              type="text"
              value={editCompanionAnimal}
              onChange={(e) => {
                setEditCompanionAnimal(e.target.value);
              }}
            />
          </span>
        </div> */}

        <S.DescriptionWrapper>
          <S.UtilImage className="material-symbols-outlined">image</S.UtilImage>

          <S.InputDescription
            value={editComments}
            onChange={(e) => {
              setEditComments(e.target.value);
            }}
          ></S.InputDescription>
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
