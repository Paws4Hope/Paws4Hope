import React, { useState } from 'react';
import { changeDialog } from '../../redux/modules/dialog';
import { useDispatch } from 'react-redux';
import submitSurvey from '../../redux/modules/submitSurvey';
import { addSurvey } from '../../redux/modules/submitSurvey';

const Survey1 = () => {
  const dispatch = useDispatch();

  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');

  const onAddHandler = () => {
    // const dialog1 = [q1, q2, q3, q4];
    const dialog1 = { q1, q2, q3, q4 };
    dispatch(addSurvey(dialog1));
  };

  return (
    <div>
      <form action="">
        <div>
          <label for="Q1">이름 : </label>
          <input
            type="text"
            id="Q1"
            value={q1}
            onChange={(e) => {
              setQ1(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="Q2">연락처 : </label>
          <input
            type="text"
            id="Q2"
            value={q2}
            onChange={(e) => {
              setQ2(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="Q3">이메일 : </label>
          <input
            type="text"
            id="Q3"
            value={q3}
            onChange={(e) => {
              setQ3(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="Q4">주소 : </label>
          <input
            type="text"
            id="Q4"
            value={q4}
            onChange={(e) => {
              setQ4(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            dispatch(changeDialog(2));
            onAddHandler();
          }}
        >
          다음
        </button>
      </form>
    </div>
  );
};

export default Survey1;
