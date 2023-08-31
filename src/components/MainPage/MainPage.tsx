import React from 'react';

import WebsiteDescription from '@/components/common/WebsiteDescription';
import PlaylistForm from '@/components/PlaylistForm/PlaylistForm';
const Controller: React.FC = (): JSX.Element => {
  return (
    <div className='relative flex h-[80vh] w-full flex-col items-center justify-center gap-12'>
      <WebsiteDescription />
      <PlaylistForm />
    </div>
  );
};
export default Controller;
