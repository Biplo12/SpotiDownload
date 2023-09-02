import React from 'react';

interface IPlaylistInputProps {
  setPlaylistId: React.Dispatch<React.SetStateAction<string>>;
}

const PlaylistInput: React.FC<IPlaylistInputProps> = ({
  setPlaylistId,
}): JSX.Element => {
  return (
    <input
      className='border-spotify-green exsm:w-auto flex w-[275px] items-center justify-center gap-3 rounded-full border-2 bg-transparent px-4 py-1.5 text-xl font-bold text-white shadow-lg outline-none disabled:cursor-not-allowed disabled:opacity-50'
      type='text'
      placeholder='Enter Spotify Playlist ID'
      onChange={(e) => setPlaylistId(e.target.value)}
    />
  );
};
export default PlaylistInput;
