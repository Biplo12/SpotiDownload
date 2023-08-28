import React from 'react';

import useSongFetcher from '@/hooks/useSongFetcher';

interface ISpotifyPlaylistFetcherProps {
  playlistId: string;
}

const SpotifyPlaylistFetcher: React.FC<ISpotifyPlaylistFetcherProps> = ({
  playlistId,
}): JSX.Element => {
  const { fetchPlaylistHandler } = useSongFetcher(playlistId);

  return (
    <div className='flex flex-col gap-4'>
      <button
        className='rounded-md bg-blue-500 px-4 py-2 text-white disabled:opacity-50'
        onClick={() => fetchPlaylistHandler()}
        disabled={!playlistId}
      >
        Fetch Playlist
      </button>
    </div>
  );
};
export default SpotifyPlaylistFetcher;
