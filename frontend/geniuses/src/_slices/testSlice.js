import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: { test: [] },
  reducers: {
    initTest: state => {
      // state : 현재 slice의 data
      state.test = [];
    },
    addTest: (state, action) => {
      state.chatting.push(action.payload); // action.paload : addTest 호출시 넘겨받는 data
    },
  },
  extraReducers: {},
});
export const { initTest, addTest } = testSlice.actions;
export default testSlice.reducer;
