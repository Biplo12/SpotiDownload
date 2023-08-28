import React from 'react';

interface IFetchedYTSongProps {
  song: {
    id: string;
    title: string;
  };
}

const FetchedYTSong: React.FC<IFetchedYTSongProps> = ({
  song,
}): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <iframe
        className='h-96 w-96'
        src={`https://www.youtube.com/embed/${song?.id}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      />
      <h1 className='text-lg font-bold text-gray-100'>{song?.title}</h1>
    </div>
  );
};
export default FetchedYTSong;
