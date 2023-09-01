import React from 'react';

import Spinner from '@/components/Dialogs/common/Spinner';

import { useAppSelector } from '@/store/store-hooks';
const FetchingPlaylist: React.FC = (): JSX.Element => {
  const songsInPlaylist = useAppSelector(
    (state) => state.global.songsLoadingState.songsInPlaylist
  );
  const songs = useAppSelector((state) => state.global.songs);
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl'>
        {songs.length} / {songsInPlaylist} Fetching playlist...
      </h1>
      <Spinner />
    </div>
  );
};
export default FetchingPlaylist;
