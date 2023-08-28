import React from 'react';

import useSongFetcher from '@/hooks/useSongFetcher';

import SpotifyIcon from '~/svg/spotify-icon.svg';

interface ISpotifyPlaylistFetcherProps {
  playlistId: string;
}

const SpotifyPlaylistFetcher: React.FC<ISpotifyPlaylistFetcherProps> = ({
  playlistId,
}): JSX.Element => {
  const { fetchPlaylistHandler } = useSongFetcher(playlistId);

  return (
    <button
      className='flex items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-2 font-bold text-white shadow-xl transition-all duration-150 ease-linear hover:border-[#1ED760] hover:text-[#1ED760] disabled:cursor-not-allowed disabled:opacity-50'
      onClick={() => fetchPlaylistHandler()}
      disabled={!playlistId}
    >
      <h1 className='text-lg font-light'>Get Playlist from </h1>
      <SpotifyIcon className='h-6 w-6' />
    </button>
  );
};
export default SpotifyPlaylistFetcher;
