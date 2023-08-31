import React, { useState } from 'react';

import PlaylistInput from '@/components/PlaylistForm/Partials/PlaylistInput';
import SpotifyPlaylistFetchButton from '@/components/PlaylistForm/Partials/SpotifyPlaylistFetchButton';

const PlaylistForm: React.FC = (): JSX.Element => {
  const [playlistId, setPlaylistId] = useState<string>('');

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <PlaylistInput setPlaylistId={setPlaylistId} />
      <SpotifyPlaylistFetchButton playlistId={playlistId} />
    </div>
  );
};
export default PlaylistForm;
