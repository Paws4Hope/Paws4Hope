import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    img: 1,
    title: '귀욤이',
    guardian: 'yoyo',
    companionAnimal: '귀욤',
    comments:
      '우리 귀욤이는 말도 잘 듣고 너무 착해요... 힘든 일이 있어도 귀욤이 발바닥만 보면 치명적인 귀여움에 힘든것도 사르르 녹아버려요 ㅠㅠ 귀염이가 제 곁에 있기 전 후로 제 하루하루는 매우 달라졌어요.'
  },
  {
    id: '2',
    img: 2,
    title: '뽀짝이가 체고에요',
    guardian: 'mimi',
    companionAnimal: '뽀짝',
    comments:
      '뽀짝이가 행복하다면 별이라도 따 줄 겁니다!!!! 뽀짝이는 저의 최고의 친구에요! 뽀짝이와 가는 피크닉은 제 일주일중 가장 여유롭고 행복한 시간입니다! 다들 우리 뽀짝이 사진 많이 보고 가세요! 또 저처럼 여기에서 좋은 짝꿍 만나 최고의 행복을 누리시길 바랍니다~~~'
  },
  {
    id: '3',
    img: 3,
    title: '심각해요..',
    guardian: 'toto',
    companionAnimal: '이쁭',
    comments: '우리 이쁭이는 정말 강아지 모델대회 내보낼까봐요... 정말 심각하게 이쁘지 않나요...?.....'
  }
];

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action) => {
      return [...state, action.payload];
    },
    editList: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        } else {
          return action.payload;
        }
      });
    },

    deleteList: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    }
  }
});

export default listsSlice.reducer;
export const { addList, editList, updateList, deleteList } = listsSlice.actions;
