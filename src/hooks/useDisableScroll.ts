import { useEffect } from 'react';

import { useAppSelector } from '@/store/store-hooks';

const useDisableScroll = () => {
  const isOpen = useAppSelector((state) => state.global.dialog.isOpen);
  useEffect(() => {
    const html = document.querySelector('html');

    if (isOpen) {
      html?.classList.add('overflow-hidden');
    }
    return () => {
      html?.classList.remove('overflow-hidden');
    };
  }, [isOpen]);
};

export default useDisableScroll;
