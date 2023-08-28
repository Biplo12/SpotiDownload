import React from 'react';
const AppHeader: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1
        className='text-4xl font-bold text-white'
        style={{ textShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}
      >
        <span
          className='text-[#1ED760]'
          style={{ textShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}
        >
          Spotify{' '}
        </span>
        Playlist to
        <span
          className='text-[#FF0000]'
          style={{ textShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}
        >
          {' '}
          Youtube{' '}
        </span>
        Playlist downloader
      </h1>
    </div>
  );
};
export default AppHeader;
