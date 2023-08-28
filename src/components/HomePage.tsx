import React, { useState } from 'react';

import useSpotifyAuthStatus from '@/hooks/useSpotifyAuthStatus';

import PlaylistInput from '@/components/PlaylistInput/PlaylistInput';
import SpotifyAuthButton from '@/components/SpotifyAuthButton/SpotifyAuthButton';
import SpotifyPlaylistFetcher from '@/components/SpotifyPlaylistFetcher/SpotifyPlaylistFetcher';
import YoutubeSongs from '@/components/YoutubeSongs/YoutubeSongs';

const HomePage: React.FC = (): JSX.Element => {
  const [playlistId, setPlaylistId] = useState<string>('');
  const { spotifyAuthStatus } = useSpotifyAuthStatus();

  return (
    <div className='flex h-auto min-h-[100vh] w-full flex-col items-center justify-center gap-4 bg-gray-100 dark:bg-gray-900'>
      {!spotifyAuthStatus ? (
        <SpotifyAuthButton />
      ) : (
        <>
          <PlaylistInput setPlaylistId={setPlaylistId} />
          <SpotifyPlaylistFetcher playlistId={playlistId} />
          <YoutubeSongs />
        </>
      )}
    </div>
  );
};
export default HomePage;
