import React from 'react';

import DownloadSong from '@/components/Dialogs/PlaylistFetchDialog/Partials/DownloadSong';

import { useAppSelector } from '@/store/store-hooks';
const SongsFetched: React.FC = (): JSX.Element => {
  const songs = useAppSelector((state) => state.global.songs);
  const playlistName = useAppSelector((state) => state.global.playlistName);
  return (
    <div className='flex h-full flex-col items-center justify-center gap-6'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-5xl'>
          <span className='text-spotify-green'>{songs.length}</span> Songs Found
        </h1>
        <h2 className='text-3xl'>
          Playlist name:{' '}
          <span className='text-spotify-green'>{playlistName}</span>
        </h2>
      </div>
      <DownloadSong />
    </div>
  );
};
export default SongsFetched;
