import React from 'react';

import useDownloadPlaylist from '@/hooks/useDownloadPlaylist';

import { useAppSelector } from '@/store/store-hooks';

import { ISongObject } from '@/interfaces/IGlobalReducerInterface';

const DownloadPlaylist: React.FC = (): JSX.Element => {
  const songs = useAppSelector((state) => state.global.songs);
  const songsLength = songs?.length;
  const { downloadPlaylist, progress, isDownloading } = useDownloadPlaylist();

  const handleDownloadSongs = async () => {
    await downloadPlaylist(songs as ISongObject[]);
  };

  return (
    <button
      className='bg-spotify-green text-spotify-black mxsm:w-auto flex w-[325px] items-center justify-center gap-3 rounded-full px-12 py-3 text-xl font-bold shadow-lg transition-all duration-200 ease-linear hover:bg-opacity-80 disabled:cursor-not-allowed disabled:opacity-50'
      onClick={handleDownloadSongs}
      disabled={isDownloading}
    >
      {isDownloading ? `${progress}/${songsLength} Downloading...` : `Download`}
    </button>
  );
};

export default DownloadPlaylist;
