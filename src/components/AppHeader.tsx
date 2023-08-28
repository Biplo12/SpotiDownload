import React from 'react';
const AppHeader: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>Spotify Playlist to YouTube Songs downloader</h1>
      <p>
        This web app allows you to download the songs from a Spotify playlist
        into a YouTube playlist. You can then download the YouTube playlist as a
        zip file.
      </p>
    </div>
  );
};
export default AppHeader;
