import React from 'react';

import SpotifyDoogyIcon from '~/svg/spotify.svg';
const AboutTheProcess: React.FC = (): JSX.Element => {
  return (
    <div className='flex min-h-[65vh] w-full items-center justify-center gap-5 bg-[#3144A3] text-white'>
      <SpotifyDoogyIcon className='h-[300px] w-[300px]' />
      <div className='flex flex-col items-start justify-center'>
        <h1 className='text-[4rem] font-bold'>How does it work?</h1>
        <p className='max-w-[900px] text-2xl'>
          When you login with your Spotify account, we will get your playlists
          and search for the songs in the playlist on YouTube. Then we will
          download the songs from YouTube and convert them to MP3 files. After
          that you can download the MP3 files.{' '}
          <span className='font-bold text-[#1db954]'>It is that simple!</span>
        </p>
      </div>
    </div>
  );
};
export default AboutTheProcess;
