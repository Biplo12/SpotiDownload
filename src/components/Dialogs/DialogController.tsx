import React, { useEffect } from 'react';

import PlaylistFetchDialog from '@/components/Dialogs/PlaylistFetchDialog/PlaylistFetchDialog';

import { useAppSelector } from '@/store/store-hooks';

const DialogController: React.FC = (): JSX.Element => {
  const { title, isOpen } = useAppSelector((state) => state.global.dialog);
  const renderDialog = () => {
    switch (title) {
      case 'PLAYLIST_FETCH':
        return <PlaylistFetchDialog />;
      default:
        return;
    }
  };

  useEffect(() => {
    const html = document.querySelector('html');

    if (isOpen) {
      html?.classList.add('overflow-hidden');
    }
    return () => {
      html?.classList.remove('overflow-hidden');
    };
  }, [isOpen]);
  return (
    <>
      <div className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50' />
      {renderDialog()}
    </>
  );
};
export default DialogController;
