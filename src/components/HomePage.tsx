import React, { useState } from 'react';

import useSpotifyAuthStatus from '@/hooks/useSpotifyAuthStatus';

import AppHeader from '@/components/AppHeader';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import MusicBars from '@/components/MusicBars';
import PlaylistInput from '@/components/PlaylistInput/PlaylistInput';
import SpotifyAuthButton from '@/components/SpotifyAuthButton/SpotifyAuthButton';
import SpotifyPlaylistFetcher from '@/components/SpotifyPlaylistFetcher/SpotifyPlaylistFetcher';
import YoutubeSongs from '@/components/YoutubeSongs/YoutubeSongs';

import { useAppSelector } from '@/store/store-hooks';

const HomePage: React.FC = (): JSX.Element => {
  const [playlistId, setPlaylistId] = useState<string>('');
  const { spotifyAuthStatus } = useSpotifyAuthStatus();
  const { isLoading } = useAppSelector(
    (state) => state.global.songsLoadingState
  );
  return (
    <div className='flex h-auto min-h-[100vh] w-full flex-col items-center justify-center gap-10 bg-gray-900'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <AppHeader />
        <MusicBars />
      </div>
      {!isLoading ? (
        <div className='flex flex-col items-center justify-center gap-4'>
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
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};
export default HomePage;
