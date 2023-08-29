/* eslint-disable @next/next/no-img-element */
import React from 'react';

const HowToUse: React.FC = (): JSX.Element => {
  const steps = [
    {
      title: 'Login with Spotify',
      description:
        'Login with your Spotify account to get your playlists and songs.',
    },
    {
      title: 'Select the playlists',
      description:
        'Select the playlists you want to download or type the playlist URL in the search bar.',
    },
    {
      title: 'Wait for the songs to load',
      description:
        'Wait for the songs to load. This can take a while depending on the amount of songs in the playlists.',
    },
    {
      title: 'Download the songs',
      description:
        'Download the songs from the playlists you selected. You can download multiple songs at once.',
    },
  ];

  return (
    <div className='flex h-auto min-h-[90vh] w-full flex-col gap-12 bg-[#3144A3] p-12 text-white'>
      <h1 className='text-center text-[4rem] font-bold'>How to use?</h1>
      <div className='flex flex-wrap items-center justify-center gap-12'>
        <div className='grid grid-cols-2 gap-12'>
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className='flex flex-col items-start justify-start gap-6'
              >
                <span className='text-9xl font-bold'>{index + 1}.</span>
                <div className='flex flex-col items-start justify-start gap-4'>
                  <h2 className='text-4xl font-bold'>{step.title}</h2>
                  <p className='max-w-[375px] text-lg'>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <img
          className='h-auto w-[400px] rounded object-cover object-bottom'
          src='/images/spotify-bg.png'
          alt='spotify'
        />
      </div>
    </div>
  );
};

export default HowToUse;
