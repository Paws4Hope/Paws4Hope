import React, { useState } from 'react';
import { changeDialog } from '../../redux/modules/dialog';
import { useDispatch } from 'react-redux';
import { addSurvey } from '../../redux/modules/submitSurvey';
import { useSelector } from 'react-redux';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { prevSurvey } from '../../redux/modules/submitSurvey';

const Survey4 = () => {
  const submitSurvey = useSelector((state) => state.submitSurvey);
  console.log('여기까지', submitSurvey);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [q15, setQ15] = useState('');
  const [q16, setQ16] = useState('');
  const [q17, setQ17] = useState('');
  const [q18, setQ18] = useState('');

  const onAddHandler = () => {
    const dialog4 = { q15, q16, q17, q18 };
    dispatch(addSurvey(dialog4));
    // 에러 가능성 2가지
    // 1. 파이어베이스 저장 방법에 대해서 고민을 해보는게 좋습니다.!
    // 다음 버튼 만들어서 데이터 잘 들어 오는지 확인해보기!

    surveys({ ...submitSurvey, 4: dialog4 });
    // surveys(submitSurvey);
  };

  //
  const surveys = async (newsurveys) => {
    const newLists = await addDoc(collection(db, 'surveys'), newsurveys);
    return newLists;
  };

  return (
    <div>
      <div>
        <label for="Q15">
          동물의 건강 상태와 예방 접종, 중성화 등의 유지에 관해 어떤 정보를 이미 알고 있는지 설명해주세요. :{' '}
        </label>
        <input
          type="text"
          id="Q15"
          value={q15}
          onChange={(e) => {
            setQ15(e.target.value);
          }}
        />
      </div>
      <div>
        <label for="Q16">입양 후 보호소와의 연락과 관련하여 희망하는 방식이 있나요? : </label>
        <input
          type="text"
          id="Q16"
          value={q16}
          onChange={(e) => {
            setQ16(e.target.value);
          }}
        />
      </div>
      <div>
        <label for="Q17">입양 후 입양한 동물을 어떻게 돌보고 지낼 예정인지 자세히 설명해주세요. : </label>
        <input
          type="text"
          id="Q17"
          value={q17}
          onChange={(e) => {
            setQ17(e.target.value);
          }}
        />
      </div>
      <div>
        <label for="Q18">동물 입양을 위해 특별히 원하는 조건이 있나요? : </label>
        <input
          type="text"
          id="Q18"
          value={q18}
          onChange={(e) => {
            setQ18(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          dispatch(changeDialog(3));
          dispatch(prevSurvey(5));
        }}
      >
        이전
      </button>
      <button
        onClick={() => {
          onAddHandler();

          navigate('/surveyDone');
        }}
      >
        제출하기
      </button>
    </div>
  );
};

export default Survey4;
