import React, { useState } from 'react';

import LandingHeader from '@/components/LandingPage/Partials/LandingHeader';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import PlaylistInput from '@/components/PlaylistInput/PlaylistInput';
import SpotifyPlaylistFetcher from '@/components/SpotifyPlaylistFetcher/SpotifyPlaylistFetcher';
import YoutubeSongs from '@/components/YoutubeSongs/YoutubeSongs';

import { useAppSelector } from '@/store/store-hooks';

const HomePage: React.FC = (): JSX.Element => {
  const [playlistId, setPlaylistId] = useState<string>('');

  const { isLoading } = useAppSelector(
    (state) => state.global.songsLoadingState
  );
  return (
    <div className='flex h-auto min-h-[100vh] w-full flex-col items-center justify-center bg-[#3144A3]'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <LandingHeader />
        {!isLoading ? (
          <div className='flex flex-col items-center justify-center gap-4'>
            <PlaylistInput setPlaylistId={setPlaylistId} />
            <SpotifyPlaylistFetcher playlistId={playlistId} />
            <YoutubeSongs />
          </div>
        ) : (
          <LoadingScreen />
        )}
      </div>
    </div>
  );
};
export default HomePage;
