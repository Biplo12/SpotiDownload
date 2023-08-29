import React from 'react';

import SpotifyDoogyIcon from '~/svg/spotify.svg';
const AboutTheProcess: React.FC = (): JSX.Element => {
  return (
    <div className='flex min-h-[80vh] w-full items-center justify-center gap-5'>
      <SpotifyDoogyIcon className='h-[300px] w-[300px]' />
      <div className='flex flex-col items-start justify-center'>
        <h1 className='text-[4rem] font-bold text-black'>How does it work?</h1>
        <p className='max-w-[800px] text-xl text-black'>
          When you login with your Spotify account, we will get your playlists
          and search for the songs in the playlist on YouTube. Then we will
          download the songs from YouTube and convert them to MP3 files. After
          that you can download the MP3 files.{' '}
          <span className='font-bold'>It is that simple!</span>
        </p>
      </div>
    </div>
  );
};
export default AboutTheProcess;
