import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import { IGlobalReducerInterface } from '@/interfaces';

const initialState: IGlobalReducerInterface = {
  spotifyAuthStatus: false,
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
    setSpotifyAuthStatus: (state, action) => {
      state.spotifyAuthStatus = action.payload;
    },
    setSongsLoadingState: (state, action) => {
      state.songsLoadingState = action.payload;
    },
  },
});

const { actions, reducer } = globalSlice;
export const { setSong, setSpotifyAuthStatus, setSongsLoadingState } = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;
