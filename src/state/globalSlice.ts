import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import { IGlobalReducerInterface } from '@/interfaces';

const initialState: IGlobalReducerInterface = {
  isLoggedInToSpotify: false,
  songs: [],
  songsLoadingState: {
    isLoading: false,
    progress: 0,
  },
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setSong: (state, action) => {
      state.songs.push(action.payload);
    },
    setIsLoggedInToSpotify: (state, action) => {
      state.isLoggedInToSpotify = action.payload;
    },
    setSongsLoadingState: (state, action) => {
      state.songsLoadingState = action.payload;
    },
  },
});

const { actions, reducer } = globalSlice;
export const { setSong, setIsLoggedInToSpotify, setSongsLoadingState } =
  actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;
