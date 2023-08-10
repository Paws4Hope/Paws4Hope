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

  const { isLoading, isError, data } = useQuery(['lists'], getLists);

  const targetList = data.find((item) => {
    return item.id === id;
  });

  const initialState = {
    ...targetList
  };

  const [{ title, guardian, companionAnimal, comments }, onChange] = useInput(initialState);

  //
  // const [editTitle, setEditTitle] = useState(targetList.title);
  // const [editGuardian, setEditGuardian] = useState(targetList.guardian);
  // const [editCompanionAnimal, setEditCompanionAnimal] = useState(targetList.companionAnimal);
  // const [editComments, setEditComments] = useState(targetList.comments);

  //
  // 쿼리!!
  const queryClient = useQueryClient();

  const mutation = useMutation(updateList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['lists']);
    }
  });

  const onEditHandler = (e) => {
    e.preventDefault();

    const editedList = {
      title,
      guardian,
      companionAnimal,
      comments
    };

    mutation.mutate({ targetId: targetList.id, editedList });
    navigate('/community');
  };

  return (
    <>
      <S.contentForm onSubmit={onEditHandler}>
        <S.TitleWrapper>
          <S.InputTitle type="text" name="title" value={title} onChange={onChange} />
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
          <S.InputDescription type="textarea" name="comments" value={comments} onChange={onChange} />
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
