import React from 'react';

import useFetchPlaylist from '@/hooks/useFetchPlaylist';
import useSearchForSong from '@/hooks/useSearchForSong';

import { IPlaylist } from '@/interfaces/IPlaylist';
import { IYouTubeSearchResult } from '@/interfaces/ISong';

interface IFetchPlaylistButtonProps {
  playlistId: string;
  setPlaylist: React.Dispatch<React.SetStateAction<IPlaylist | null>>;
  songNames: string[];
  setSongIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const FetchPlaylistButton: React.FC<IFetchPlaylistButtonProps> = ({
  playlistId,
  setPlaylist,
  songNames,
  setSongIds,
}): JSX.Element => {
  const { searchForSong } = useSearchForSong();

  const { fetchPlaylist } = useFetchPlaylist(playlistId);

  const fetchPlaylistHandler = async () => {
    const { data } = await fetchPlaylist();
    setPlaylist(data?.data as IPlaylist);
    for (let i = 0; i < songNames.length; i++) {
      const song = (await searchForSong(songNames[i])) as IYouTubeSearchResult;
      const songId = song?.items?.[0].id.videoId;
      setSongIds((songIds) => [...songIds, songId]);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  };

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
