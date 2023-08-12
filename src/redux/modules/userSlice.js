import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    uid: '',
    displayName: '',
    email: '',
    photoURL: '',
    isLogin: false
  }
];

const userSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    setUser(state, action) {
      return (state = action.payload);
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
