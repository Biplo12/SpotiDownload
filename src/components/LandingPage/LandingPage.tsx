import React from 'react';

import LandingHeader from '@/components/LandingPage/Partials/LandingHeader';
import MusicBars from '@/components/MusicBars';
import SpotifyAuthButton from '@/components/SpotifyAuthButton/SpotifyAuthButton';
const LandingPage: React.FC = (): JSX.Element => {
  return (
    <div className='relative flex h-[80vh] w-full flex-col items-center justify-center gap-12'>
      <LandingHeader />
      <SpotifyAuthButton />
      <div className='absolute bottom-0 left-0'>
        <MusicBars />
      </div>
    </div>
  );
};
export default LandingPage;
