import React from 'react';
const SPOTIFY_LOGIN_URL = '/api/authorize/spotifyAuth';
import SpotifyIcon from '~/svg/spotify-icon.svg';
const SpotifyAuthButton: React.FC = (): JSX.Element => {
  const handleSpotifyLoginRedirect = () => {
    window.location.href = SPOTIFY_LOGIN_URL;
  };

  return (
    <button
      className='flex items-center justify-center gap-4 rounded-lg border border-gray-300 px-6 py-3 font-bold text-white shadow-2xl transition-all duration-150 ease-linear hover:border-[#1ED760] hover:text-[#1ED760]'
      onClick={handleSpotifyLoginRedirect}
    >
      <SpotifyIcon className='h-8 w-8' />
      <h1 className='text-2xl font-light'>Login in with Spotify</h1>
    </button>
  );
};
export default SpotifyAuthButton;
