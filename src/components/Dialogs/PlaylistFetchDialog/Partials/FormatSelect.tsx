import React from 'react';

interface IFormatSelectProps {
  setSongFormat: React.Dispatch<React.SetStateAction<string>>;
}

const FormatSelect: React.FC<IFormatSelectProps> = ({
  setSongFormat,
}): JSX.Element => {
  const handleFormatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSongFormat(e.target.value);
  };
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl font-bold'>Select Song Format</h1>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='flex items-center justify-center gap-4'>
          <input
            type='radio'
            id='mp3'
            name='format'
            value='mp3'
            className='text-black'
            onChange={handleFormatChange}
          />
          <label htmlFor='mp3'>MP3</label>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <input
            type='radio'
            id='wav'
            name='format'
            value='wav'
            className='text-black'
            onChange={handleFormatChange}
          />
          <label htmlFor='wav'>WAV</label>
        </div>
      </div>
    </div>
  );
};
export default FormatSelect;
