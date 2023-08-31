import React from 'react';

import useSongFetcher from '@/hooks/useSongFetcher';

interface ISpotifyPlaylistFetchButtonProps {
  playlistId: string;
}

const SpotifyPlaylistFetchButton: React.FC<
  ISpotifyPlaylistFetchButtonProps
> = ({ playlistId }): JSX.Element => {
  const { fetchPlaylistHandler } = useSongFetcher(playlistId);

  return (
    <button
      className='bg-spotify-green text-spotify-black flex min-w-[325px] items-center justify-center gap-3 rounded-full px-12 py-3 text-xl font-bold shadow-lg disabled:cursor-not-allowed disabled:opacity-50'
      onClick={() => fetchPlaylistHandler()}
      disabled={!playlistId}
    >
      Fetch Playlist
    </button>
  );
};
export default SpotifyPlaylistFetchButton;
