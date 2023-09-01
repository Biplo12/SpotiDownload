import React from 'react';

import { useAppDispatch } from '@/store/store-hooks';

import { closeDialog } from '@/state/globalSlice';

import CloseIcon from '~/svg/close.svg';

const DialogHeader: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };
  return (
    <div className='text-spotify-green mx-4 my-2 flex items-center justify-end py-2'>
      <button onClick={handleCloseDialog}>
        <CloseIcon className='h-8 w-8 cursor-pointer' fill='#1DB954' />
      </button>
    </div>
  );
};
export default DialogHeader;
