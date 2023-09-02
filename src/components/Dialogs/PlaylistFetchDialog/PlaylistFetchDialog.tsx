import React from 'react';

import DialogHeader from '@/components/Dialogs/common/DialogHeader';
import FetchingPlaylist from '@/components/Dialogs/PlaylistFetchDialog/Partials/FetchingPlaylist';
import PlaylistDownloaded from '@/components/Dialogs/PlaylistFetchDialog/Partials/PlaylistDownloaded';
import PlaylistFetched from '@/components/Dialogs/PlaylistFetchDialog/Partials/PlaylistFetched';

import { useAppSelector } from '@/store/store-hooks';
const PlaylistFetchDialog: React.FC = (): JSX.Element => {
  const isPlaylistDownloaded = useAppSelector(
    (state) => state.global.isPlaylistDownloaded
  );
  const { isLoading } = useAppSelector(
    (state) => state.global.songsLoadingState
  );
  const songs = useAppSelector((state) => state.global.songs);
  return (
    <div className='bg-spotify-black fixed left-1/2 top-1/2 z-50 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 transform rounded-md text-white'>
      <DialogHeader />
      <div className='flex h-[320px] w-full flex-col items-center justify-center'>
        {isLoading && <FetchingPlaylist />}
        {!isLoading && !isPlaylistDownloaded && songs.length > 0 && (
          <PlaylistFetched />
        )}
        {isPlaylistDownloaded && <PlaylistDownloaded />}
      </div>
    </div>
  );
};
export default PlaylistFetchDialog;
