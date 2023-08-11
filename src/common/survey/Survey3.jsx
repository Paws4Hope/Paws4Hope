import React, { useState } from 'react';
import { changeDialog } from '../../redux/modules/dialog';
import { addSurvey } from '../../redux/modules/submitSurvey';
import { useDispatch } from 'react-redux';

const Survey3 = () => {
  const dispatch = useDispatch();

  const [q10, setQ10] = useState('');
  const [q11, setQ11] = useState('');
  const [q12, setQ12] = useState('');
  const [q13, setQ13] = useState('');
  const [q14, setQ14] = useState('');

  const onAddHandler = () => {
    const dialog3 = { q10, q11, q12, q13, q14 };
    dispatch(addSurvey(dialog3));
  };

  return (
    <div>
      <form>
        <div>
          <label for="Q10">주거환경(아파트, 주택 등) : </label>
          <input
            type="text"
            id="Q10"
            value={q10}
            onChange={(e) => {
              setQ10(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="Q11">자녀 혹은 다른 반려동물과 함께 살고 계신가요? (예/아니오) : </label>
          <input
            type="text"
            id="Q11"
            value={q11}
            onChange={(e) => {
              setQ11(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="Q12">1인가구인 경우 반려동물을 책임질 준비가 되었는지 간단하게 설명해주세요. : </label>
          <input
            type="text"
            id="Q12"
            value={q12}
            onChange={(e) => {
              setQ12(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="Q13">1인가구로서 반려동물과 함께할 시간과 관심을 어머나 할애할 수 있는지 설명해주세요. : </label>
          <input
            type="text"
            id="Q13"
            value={q13}
            onChange={(e) => {
              setQ13(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="Q14">입양을 고려한 이유와 입양 후 동물과의 미래에 대한 비전을 간단히 설명해 주세요. : </label>
          <input
            type="text"
            id="Q14"
            value={q14}
            onChange={(e) => {
              setQ14(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            dispatch(changeDialog(2));
          }}
        >
          이전
        </button>
        <button
          onClick={() => {
            dispatch(changeDialog(4));
            onAddHandler();
          }}
        >
          다음
        </button>
      </form>
    </div>
  );
};

export default Survey3;
