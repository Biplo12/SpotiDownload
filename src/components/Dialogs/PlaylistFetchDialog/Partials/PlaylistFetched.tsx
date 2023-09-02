import React from 'react';

import DownloadPlaylist from '@/components/Dialogs/PlaylistFetchDialog/Partials/DownloadPlaylist';

import { useAppSelector } from '@/store/store-hooks';
const PlaylistFetched: React.FC = (): JSX.Element => {
  const songs = useAppSelector((state) => state.global.songs);
  const playlistName = useAppSelector((state) => state.global.playlistName);
  return (
    <div className='flex h-full flex-col items-center justify-center gap-6'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='mxsm:text-3xl text-5xl'>
          <span className='text-spotify-green'>{songs.length}</span> Songs Found
        </h1>
        <h2 className='mxsm:text-xl text-3xl'>
          Playlist name:{' '}
          <span className='text-spotify-green'>{playlistName}</span>
        </h2>
      </div>
      <DownloadPlaylist />
    </div>
  );
};
export default PlaylistFetched;
