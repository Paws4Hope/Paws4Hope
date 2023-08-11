import * as S from './AddList.styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addList } from '../../../api/lists';
import moment from 'moment';
import { useMutation, QueryClient } from '@tanstack/react-query';
import Upload from '../Upload';
import useInput from '../../../hooks/useInput';
import { Button } from '../../../components';
import ImageUpload from '../ImageUpload';
import { nanoid } from 'nanoid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../firebase';

const AddList = () => {
  const navigate = useNavigate();
  // 시간
  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

  const queryClient = new QueryClient();

  const mutation = useMutation(addList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });

  // 기본 데이터 설정
  const initialState = {
    title: '',
    content: ''
  };

  // useInput으로 변경
  const [{ title, content }, onChange] = useInput(initialState);

  const [preview, setPreview] = useState(null);
  const [thumbNail, setThumbNail] = useState('');

  // 1. 업로드할 이미지 파일 선택 [ㅇ]
  const handleUpload = (e) => {
    handleFileSelect(e.target.files[0]);
    let prevImage = URL.createObjectURL(e.target.files[0]);
    setPreview(prevImage);
  };

  // 2. 파이어베이스 storage 저장 [ㅇ]
  const handleFileSelect = async (file) => {
    const imageRef = ref(storage, `images/${nanoid() + ImageUpload.name}`);
    await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(imageRef);
    setThumbNail(downloadURL);
  };

  const onAddHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      id: nanoid(),
      uid: '',
      title,
      content,
      like: 0,
      images: [],
      thumbNail,
      comments: [],
      time: nowTime
    };
    mutation.mutate({ newPost: newPost, id: newPost.id });
    navigate('/community');
  };

  return (
    <>
      {thumbNail}
      <S.contentForm onSubmit={onAddHandler}>
        <S.TitleWrapper>
          <S.InputTitle placeholder="제목을 입력하세요" name="title" value={title} onChange={onChange} />
          <div>
            <label htmlFor="imageFile">썸네일 추가</label>
            <img src={preview} />
            <input
              id="imageFile"
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              onChange={handleUpload}
              style={{ display: 'none' }}
            />
          </div>
        </S.TitleWrapper>
        <S.Line />

        <S.DescriptionWrapper>
          <S.UtilImage className="material-symbols-outlined">image</S.UtilImage>
          <S.InputDescription placeholder="내용을 입력하세요" name="content" value={content} onChange={onChange} />
        </S.DescriptionWrapper>

        <S.BottomAppBar>
          <S.AppBarInner>
            <Button variant="textIcon" color="gray">
              <span className="material-symbols-outlined">west</span>
              나가기
            </Button>
            <S.ButtonWrapper>
              <Button>임시저장</Button>
              <Button variant="solid" color="black">
                등록하기
              </Button>
            </S.ButtonWrapper>
          </S.AppBarInner>
        </S.BottomAppBar>
      </S.contentForm>
    </>
  );
};

export default AddList;
