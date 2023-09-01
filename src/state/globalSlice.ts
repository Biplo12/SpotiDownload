import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import { IGlobalReducerInterface } from '@/interfaces';

const initialState: IGlobalReducerInterface = {
  spotifyAuthStatus: false,
  songs: [],
  playlistName: '',
  songsLoadingState: {
    isLoading: false,
    songsInPlaylist: 0,
  },
  isPlaylistDownloaded: false,
  dialog: {
    isOpen: false,
    title: '',
    actions: [],
  },
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setSong: (state, action) => {
      state.songs.push(action.payload);
    },
    setPlaylistName: (state, action) => {
      state.playlistName = action.payload;
    },
    resetSongs: (state) => {
      state.songs = [];
    },
    setIsPlaylistDownloaded: (state, action) => {
      state.isPlaylistDownloaded = action.payload;
    },
    setSpotifyAuthStatus: (state, action) => {
      state.spotifyAuthStatus = action.payload;
    },
    setSongsLoadingState: (state, action) => {
      state.songsLoadingState = action.payload;
    },
    openDialog: (state, action) => {
      state.dialog = action.payload;
      state.dialog.isOpen = true;
    },
    closeDialog: (state) => {
      state.dialog = initialState.dialog;
    },
  },
});

const { actions, reducer } = globalSlice;
export const {
  setSong,
  setSpotifyAuthStatus,
  setSongsLoadingState,
  openDialog,
  closeDialog,
  resetSongs,
  setPlaylistName,
  setIsPlaylistDownloaded,
} = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;
