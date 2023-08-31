import React from 'react';

import { useAppSelector } from '@/store/store-hooks';

const LoadingScreen: React.FC = (): JSX.Element => {
  const { progress } = useAppSelector(
    (state) => state.global.songsLoadingState
  );
  return (
    <div className='flex w-full items-center justify-center text-gray-100'>
      <div className='flex w-full max-w-[1000px] flex-col items-center justify-center'>
        <p>Fetching songs...</p>
        <div className='flex w-full items-center justify-center gap-4'>
          <p>0:00</p>
          <div className='relative w-full'>
            <div className='h-2 w-full rounded-lg bg-white bg-opacity-25' />
            <div
              className='absolute left-0 top-0 h-2 w-full rounded-lg bg-white transition-all duration-1000 ease-in-out'
              style={{
                width: `${progress * 2}%`,
              }}
            />
          </div>
          <p>0:{progress < 10 ? `0${progress}` : progress}</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
