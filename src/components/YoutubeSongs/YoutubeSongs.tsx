import React from 'react';

import YoutubeSong from '@/components/YoutubeSongs/Partials/YoutubeSong';

import { useAppSelector } from '@/store/store-hooks';
const YoutubeSongs: React.FC = (): JSX.Element => {
  const { songs } = useAppSelector((state) => state.global);
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 px-10'>
      {songs.map((song, index) => (
        <YoutubeSong song={song} key={index} />
      ))}
    </div>
  );
};
export default YoutubeSongs;
