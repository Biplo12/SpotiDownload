import React, { useState } from 'react';

import useIsLoggedIn from '@/hooks/useIsLoggedInToSpotify';

import FetchPlaylistButton from '@/components/FetchPlaylistButton';
import PlaylistInput from '@/components/PlaylistInput';

import { IPlaylist } from '@/interfaces/IPlaylist';

const SPOTIFY_LOGIN_URL = '/api/authorize/spotifyAuth';
const GOOGLE_LOGIN_URL = '/api/authorize/googleAuth';

const Main: React.FC = (): JSX.Element => {
  const [playlistId, setPlaylistId] = useState<string>('');
  const [playlist, setPlaylist] = useState<IPlaylist | null>(null);
  const handleSpotifyLoginRedirect = () => {
    window.location.href = SPOTIFY_LOGIN_URL;
  };
  const handleGoogleLoginRedirect = () => {
    window.location.href = GOOGLE_LOGIN_URL;
  };
  const { isLoggedInToSpotify } = useIsLoggedIn();

  return (
    <div className='flex h-auto min-h-[100vh] w-full flex-col items-center justify-center gap-4 bg-gray-100 dark:bg-gray-900'>
      <h1 className='text-5xl font-bold text-gray-900 dark:text-gray-100'>
        Hello World!
      </h1>
      {!isLoggedInToSpotify && (
        <button
          className='rounded-md bg-blue-500 px-4 py-2 text-white'
          onClick={handleSpotifyLoginRedirect}
        >
          Login to Spotify
        </button>
      )}
      <button
        className='rounded-md bg-blue-500 px-4 py-2 text-white'
        onClick={handleGoogleLoginRedirect}
      >
        Login to Google
      </button>
      {isLoggedInToSpotify && (
        <>
          <PlaylistInput setPlaylistId={setPlaylistId} />
          <FetchPlaylistButton
            playlistId={playlistId}
            setPlaylist={setPlaylist}
          />
        </>
      )}
      {playlist && isLoggedInToSpotify && (
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
            {playlist.name}
          </h1>
          <div className='flex flex-col gap-4'>
            {playlist.tracks.items.map((track) => (
              <div className='flex flex-col gap-4' key={track.track.id}>
                <h1 className='text-xl font-bold text-gray-900 dark:text-gray-100'>
                  {track.track.name}
                </h1>
                <div className='flex flex-col gap-4'>
                  {track.track.artists.map((artist) => (
                    <h1
                      className='text-lg font-bold text-gray-900 dark:text-gray-100'
                      key={artist.id}
                    >
                      {artist.name}
                    </h1>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Main;
