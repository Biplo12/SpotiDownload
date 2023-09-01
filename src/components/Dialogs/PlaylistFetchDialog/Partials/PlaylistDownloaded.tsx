import React from 'react';

import { useAppDispatch } from '@/store/store-hooks';

import { closeDialog } from '@/state/globalSlice';
const PlaylistDownloaded: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };
  return (
    <div className='flex h-full flex-col items-center justify-center gap-6'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-spotify-green text-5xl'>Playlist downloaded!</h1>
        <p className='text-lg'>Click the button below to download playlist</p>
      </div>
      <button
        className='bg-spotify-green text-spotify-black flex min-w-[325px] items-center justify-center gap-3 rounded-full px-12 py-3 text-xl font-bold shadow-lg transition-all duration-200 ease-linear hover:bg-opacity-80 disabled:cursor-not-allowed disabled:opacity-50'
        onClick={handleCloseDialog}
      >
        Download another playlist
      </button>
    </div>
  );
};
export default PlaylistDownloaded;
