import React from 'react';

import WebsiteDescription from '@/components/common/WebsiteDescription';
import MusicBars from '@/components/LoginPage/Partials/MusicBars';
import SpotifyAuthButton from '@/components/LoginPage/Partials/SpotifyAuthButton';
const LoginPage: React.FC = (): JSX.Element => {
  return (
    <div className='relative flex h-[80vh] w-full flex-col items-center justify-center gap-12 p-8'>
      <WebsiteDescription />
      <SpotifyAuthButton />
      <div className='absolute bottom-0 left-0'>
        <MusicBars />
      </div>
    </div>
  );
};
export default LoginPage;
