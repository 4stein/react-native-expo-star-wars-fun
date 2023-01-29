import { createSlice } from '@reduxjs/toolkit';
import { fetchFun, fetchProfiles } from '../asyncThunks';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    profiles: [],
    status: 'loading',
    females: 0,
    males: 0,
    others: 0,
    clearAll: false,
    funInfo: [],
  },
  reducers: {
    addFun: (state, { payload }) => {
      if (payload === 'female') {
        state.females += 1;
        state.clearAll = false;
      } else if (payload === 'male') {
        state.males += 1;
        state.clearAll = false;
      } else if (payload === 'n/a') {
        state.others += 1;
        state.clearAll = false;
      }
    },
    removeFun: (state, { payload }) => {
      if (payload === 'female') {
        state.females -= 1;
      } else if (payload === 'male') {
        state.males -= 1;
      } else if (payload === 'n/a') {
        state.others -= 1;
      }
    },
    clearFun: state => {
      state.females = 0;
      state.males = 0;
      state.others = 0;
      state.clearAll = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProfiles.pending, state => {
      state.status = 'loading';
      state.profiles = [];
    });
    builder.addCase(fetchProfiles.fulfilled, (state, { payload }) => {
      state.status = 'loaded';
      state.profiles = payload;
    });
    builder.addCase(fetchProfiles.rejected, state => {
      state.status = 'error';
      state.profiles = [];
    });
    builder.addCase(fetchFun.pending, state => {
      state.status = 'loading';
      state.funInfo = [];
    });
    builder.addCase(fetchFun.fulfilled, (state, { payload }) => {
      state.status = 'loaded';
      state.funInfo = payload;
    });
    builder.addCase(fetchFun.rejected, state => {
      state.status = 'error';
      state.funInfo = [];
    });
  },
});

export const { addFun, removeFun, clearFun } = listSlice.actions;

export const selectList = store => store.list;

export default listSlice.reducer;
