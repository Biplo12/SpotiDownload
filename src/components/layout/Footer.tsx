import React from 'react';
const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className='bg-spotify-black flex min-h-[6.5vh] w-full items-center justify-center gap-3 text-white'>
      <p className='flex gap-1 text-xl'>
        <span>Created by </span>
        <a
          href='https://github.com/Biplo12'
          target='_blank'
          rel='noopener noreferrer'
          className='text-spotify-green hover:underline'
        >
          Robert Sinski{' '}
        </a>
      </p>
      <p className='flex text-xl'>|</p>
      <p className='flex gap-1 text-xl'>
        <span>Powered by </span>
        <a
          href='https://developer.spotify.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-spotify-green hover:underline'
        >
          Spotify API
        </a>
      </p>
    </footer>
  );
};
export default Footer;
