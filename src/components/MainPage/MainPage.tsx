import React from 'react';

import WebsiteDescription from '@/components/common/WebsiteDescription';
import MusicBars from '@/components/LoginPage/Partials/MusicBars';
import PlaylistForm from '@/components/PlaylistForm/PlaylistForm';
const Controller: React.FC = (): JSX.Element => {
  return (
    <div className='relative flex h-[80vh] w-full flex-col items-center justify-center gap-12'>
      <WebsiteDescription />
      <div className='absolute bottom-0 left-0'>
        <MusicBars />
      </div>
      <PlaylistForm />
    </div>
  );
};
export default Controller;
