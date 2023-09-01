import React from 'react';

import SpotifyDoogyIcon from '~/svg/spotify.svg';
const AboutTheProcess: React.FC = (): JSX.Element => {
  return (
    <div className='flex min-h-[65vh] w-full items-center justify-center gap-5 bg-[#3144A3] text-white'>
      <SpotifyDoogyIcon className='h-[300px] w-[300px]' />
      <div className='flex flex-col items-start justify-center'>
        <h1 className='text-spotify-green text-[4rem] font-bold '>
          About the process
        </h1>
        <p className='max-w-[900px] text-2xl'>
          When you login with your Spotify account, and paste the playlist ID,
          the website will fetch the playlist from Spotify. Then it will
          download the MP3 files from YouTube. Finally, it will zip the MP3
          files and send it to you.{' '}
          <span className='text-spotify-green font-bold'>
            It is that simple!
          </span>
        </p>
      </div>
    </div>
  );
};
export default AboutTheProcess;
