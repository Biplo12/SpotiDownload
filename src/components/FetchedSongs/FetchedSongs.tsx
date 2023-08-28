import React from 'react';

import { useAppSelector } from '@/store/store-hooks';
const FetchedSongs: React.FC = (): JSX.Element => {
  const { songs } = useAppSelector((state) => state.global);
  return (
    <div className='flex items-center justify-center gap-3'>
      {songs.map((song, index) => (
        <div
          className='flex flex-col items-center justify-center gap-4'
          key={index}
        >
          <iframe
            className='h-96 w-96'
            src={`https://www.youtube.com/embed/${song?.id}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          />
          <h1 className='text-lg font-bold text-gray-100'>{song?.title}</h1>
        </div>
      ))}
    </div>
  );
};
export default FetchedSongs;
