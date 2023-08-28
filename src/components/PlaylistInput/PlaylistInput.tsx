import React from 'react';

interface IPlaylistInputProps {
  setPlaylistId: React.Dispatch<React.SetStateAction<string>>;
}

const PlaylistInput: React.FC<IPlaylistInputProps> = ({
  setPlaylistId,
}): JSX.Element => {
  return (
    <input
      className='text-md rounded-md border border-gray-100 bg-gray-100 bg-transparent px-4 py-2 font-light text-gray-100 focus:border-transparent focus:outline-none focus:ring-[1px] focus:ring-[#1ED760]'
      type='text'
      placeholder='Enter Spotify Playlist ID'
      onChange={(e) => setPlaylistId(e.target.value)}
    />
  );
};
export default PlaylistInput;
