import React from 'react';

interface IPlaylistInputProps {
  setPlaylistId: React.Dispatch<React.SetStateAction<string>>;
}

const PlaylistInput: React.FC<IPlaylistInputProps> = ({
  setPlaylistId,
}): JSX.Element => {
  return (
    <div className='flex flex-col gap-4'>
      <input
        className='rounded-md bg-gray-100 px-4 py-2 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
        type='text'
        placeholder='Playlist ID'
        onChange={(e) => setPlaylistId(e.target.value)}
      />
    </div>
  );
};
export default PlaylistInput;
