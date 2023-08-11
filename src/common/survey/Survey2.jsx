import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeDialog } from '../../redux/modules/dialog';
import { addSurvey } from '../../redux/modules/submitSurvey';
import { prevSurvey } from '../../redux/modules/submitSurvey';

const Survey2 = () => {
  const dispatch = useDispatch();

  const [q05, setQ5] = useState('');
  const [q06, setQ6] = useState('');
  const [q07, setQ7] = useState('');
  const [q08, setQ8] = useState('');
  const [q09, setQ9] = useState('');

  const onAddHandler = () => {
    const dialog2 = [q05, q06, q07, q08, q09];
    dispatch(addSurvey(dialog2));
  };

  return (
    <div>
      <form action="">
        <div>
          <label for="Q5">입양을 원하는 동물의 종류 : </label>
          <input
            type="text"
            id="Q5"
            value={q05}
            onChange={(e) => {
              setQ5(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="Q6">입양을 원하는 동물의 품종(선택) : </label>
          <input
            type="text"
            id="Q6"
            value={q06}
            onChange={(e) => {
              setQ6(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="Q7">입양을 원하는 동물의 성별(선택) : </label>
          <input
            type="text"
            id="Q7"
            value={q07}
            onChange={(e) => {
              setQ7(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="Q8">입양을 원하는 동물의 나이(선택) : </label>
          <input
            type="text"
            id="Q8"
            value={q08}
            onChange={(e) => {
              setQ8(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="Q9">입양을 원하는 동물의 크기(선택) : </label>
          <input
            type="text"
            id="Q9"
            value={q09}
            onChange={(e) => {
              setQ9(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            dispatch(changeDialog(1));
            dispatch(prevSurvey(4));
          }}
        >
          이전
        </button>
        <button
          onClick={() => {
            dispatch(changeDialog(3));
            onAddHandler();
          }}
        >
          다음
        </button>
      </form>
    </div>
  );
};

export default Survey2;
