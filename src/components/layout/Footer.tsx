import React from 'react';
const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className='flex min-h-[6.5vh] w-full items-center justify-center gap-3 bg-[#191414] text-white'>
      <p className='flex gap-2 text-xl'>
        <span>
          Created by{' '}
          <a
            href='https://github.com/Biplo12'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#1DB954] hover:underline'
          >
            Robert Sinski{' '}
          </a>
        </span>
      </p>
      <p className='flex gap-2 text-xl'>|</p>
      <span>
        <p className='flex gap-2 text-xl'>
          Powered by{' '}
          <a
            href='https://developer.spotify.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#1DB954] hover:underline'
          >
            Spotify API
          </a>
        </p>
      </span>
    </footer>
  );
};
export default Footer;
