import React from 'react';

import useSongFetcher from '@/hooks/useSongFetcher';

import { useAppDispatch } from '@/store/store-hooks';

import {
  openDialog,
  resetSongs,
  setIsPlaylistDownloaded,
} from '@/state/globalSlice';

interface ISpotifyPlaylistFetchButtonProps {
  playlistId: string;
}

const SpotifyPlaylistFetchButton: React.FC<
  ISpotifyPlaylistFetchButtonProps
> = ({ playlistId }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { fetchPlaylistHandler } = useSongFetcher(playlistId);
  const handleOpenDialog = () => {
    dispatch(resetSongs());
    dispatch(setIsPlaylistDownloaded(false));
    fetchPlaylistHandler();
    dispatch(
      openDialog({
        title: 'PLAYLIST_FETCH',
      })
    );
  };
  return (
    <button
      className='bg-spotify-green text-spotify-black flex min-w-[325px] items-center justify-center gap-3 rounded-full px-12 py-3 text-xl font-bold shadow-lg transition-all duration-200 ease-linear hover:bg-opacity-80 disabled:cursor-not-allowed disabled:opacity-50'
      onClick={handleOpenDialog}
      disabled={!playlistId}
    >
      Fetch Playlist
    </button>
  );
};
export default SpotifyPlaylistFetchButton;
