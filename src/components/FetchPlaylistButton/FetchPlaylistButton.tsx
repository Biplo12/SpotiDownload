import React from 'react';

import useFetchSongs from '@/hooks/useFetchSongs';

interface IFetchPlaylistButtonProps {
  playlistId: string;
}

const FetchPlaylistButton: React.FC<IFetchPlaylistButtonProps> = ({
  playlistId,
}): JSX.Element => {
  const { fetchPlaylistHandler } = useFetchSongs(playlistId);

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
export default FetchPlaylistButton;
