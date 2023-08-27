import React from 'react';

import useFetchPlaylist from '@/hooks/useFetchPlaylist';

import { IPlaylist } from '@/interfaces/IPlaylist';

interface IFetchPlaylistButtonProps {
  playlistId: string;
  setPlaylist: React.Dispatch<React.SetStateAction<IPlaylist | null>>;
}

const FetchPlaylistButton: React.FC<IFetchPlaylistButtonProps> = ({
  playlistId,
  setPlaylist,
}): JSX.Element => {
  const { refetch } = useFetchPlaylist(playlistId);
  const fetchPlaylist = async () => {
    const { data } = await refetch();
    setPlaylist(data?.data as IPlaylist);
  };
  return (
    <div className='flex flex-col gap-4'>
      <button
        className='rounded-md bg-blue-500 px-4 py-2 text-white disabled:opacity-50'
        onClick={() => fetchPlaylist()}
        disabled={!playlistId}
      >
        Fetch Playlist
      </button>
    </div>
  );
};
export default FetchPlaylistButton;
