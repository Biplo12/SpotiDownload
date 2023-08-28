import React, { useState } from 'react';

import useIsLoggedInToSpotify from '@/hooks/useIsLoggedInToSpotify';

import FetchedSongs from '@/components/FetchedSongs/FetchedSongs';
import FetchPlaylistButton from '@/components/FetchPlaylistButton/FetchPlaylistButton';
import LoginToSpotifyButton from '@/components/LoginToSpotifyButton/LoginToSpotifyButton';
import PlaylistInput from '@/components/PlaylistInput/PlaylistInput';

const Main: React.FC = (): JSX.Element => {
  const [playlistId, setPlaylistId] = useState<string>('');
  const { isLoggedInToSpotify } = useIsLoggedInToSpotify();

  return (
    <div className='flex h-auto min-h-[100vh] w-full flex-col items-center justify-center gap-4 bg-gray-100 dark:bg-gray-900'>
      {!isLoggedInToSpotify ? (
        <LoginToSpotifyButton />
      ) : (
        <>
          <PlaylistInput setPlaylistId={setPlaylistId} />
          <FetchPlaylistButton playlistId={playlistId} />
          <FetchedSongs />
        </>
      )}
    </div>
  );
};
export default Main;
