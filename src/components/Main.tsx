import React, { useEffect, useState } from 'react';

import useIsLoggedIn from '@/hooks/useIsLoggedInToSpotify';

import FetchPlaylistButton from '@/components/FetchPlaylistButton';
import PlaylistInput from '@/components/PlaylistInput';

import { IPlaylist } from '@/interfaces/IPlaylist';

const SPOTIFY_LOGIN_URL = '/api/authorize/spotifyAuth';

const Main: React.FC = (): JSX.Element => {
  const [playlistId, setPlaylistId] = useState<string>('');
  const [playlist, setPlaylist] = useState<IPlaylist | null>(null);
  const [songNames, setSongNames] = useState<string[]>([]);
  const [songIds, setSongIds] = useState<string[]>([]);
  const handleSpotifyLoginRedirect = () => {
    window.location.href = SPOTIFY_LOGIN_URL;
  };

  const { isLoggedInToSpotify } = useIsLoggedIn();

  useEffect(() => {
    if (playlist) {
      const songNames: string[] = [];
      playlist.tracks.items.forEach((track) => {
        track.track.artists.forEach((artist) => {
          songNames.push(`${track.track.name} ${artist.name}`);
        });
      });
      setSongNames(songNames.slice(0, 5));
    }
  }, [playlist]);

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

      {isLoggedInToSpotify && (
        <>
          <PlaylistInput setPlaylistId={setPlaylistId} />
          <FetchPlaylistButton
            playlistId={playlistId}
            setPlaylist={setPlaylist}
            songNames={songNames}
            setSongIds={setSongIds}
          />
        </>
      )}
      <div className='flex items-center justify-center gap-3'>
        {songIds.map((songId, index) => (
          <div
            className='flex flex-col items-center justify-center gap-4'
            key={index}
          >
            <iframe
              className='h-96 w-96'
              src={`https://www.youtube.com/embed/${songId}`}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            />
            <h1 className='text-lg font-bold text-gray-100'>
              {songNames[index]}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Main;
