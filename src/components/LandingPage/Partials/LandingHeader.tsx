import React from 'react';
const LandingHeader: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 text-white'>
      <h1 className='text-center text-[4rem] font-bold'>
        Download your Spotify playlists as MP3 files for free!
      </h1>
      <p className='max-w-[875px] text-center text-xl'>
        This website allows you to download your Spotify playlists as MP3 files
        for free. Just login with your Spotify account and paste the playlist
        link or choose one of your playlists. Then you can download the songs as
        MP3 files.
      </p>
    </div>
  );
};
export default LandingHeader;
