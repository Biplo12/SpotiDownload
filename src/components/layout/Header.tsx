import React from 'react';

import Logo from '@/components/layout/Partials/Header/Logo';
import LogoutButton from '@/components/layout/Partials/Header/LogoutButton';

import { useAppSelector } from '@/store/store-hooks';
const Header: React.FC = (): JSX.Element => {
  const spotifyAuthStatus = useAppSelector(
    (state) => state.global.spotifyAuthStatus
  );
  return (
    <header className='exsm:justify-center absolute left-0 top-0 z-20 flex w-full flex-wrap items-center justify-between gap-2 bg-transparent p-4'>
      <Logo />
      {spotifyAuthStatus && <LogoutButton />}
    </header>
  );
};
export default Header;
