import React from 'react';
const SPOTIFY_LOGIN_URL = '/api/authorize/spotifyAuth';
const SpotifyAuthButton: React.FC = (): JSX.Element => {
  const handleSpotifyLoginRedirect = () => {
    window.location.href = SPOTIFY_LOGIN_URL;
  };

  return (
    <button
      className='rounded-md bg-blue-500 px-4 py-2 text-white'
      onClick={handleSpotifyLoginRedirect}
    >
      Login to Spotify
    </button>
  );
};
export default SpotifyAuthButton;
