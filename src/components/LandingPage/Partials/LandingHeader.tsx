import React from 'react';
const LandingHeader: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <h1
        className='text-center text-[4rem] font-bold text-white'
        style={{ textShadow: '0 0 5px #000000' }}
      >
        Download your Spotify playlists as MP3 files for free!
      </h1>
      <p className='max-w-[800px] text-center text-lg text-white'>
        This website allows you to download your Spotify playlists as MP3 files
        for free. Just login with your Spotify account and paste the playlist
        link or choose one of your playlists. Then you can download the songs as
        MP3 files.
      </p>
    </div>
  );
};
export default LandingHeader;
