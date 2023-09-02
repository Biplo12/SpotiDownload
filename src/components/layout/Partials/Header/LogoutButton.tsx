import { useRouter } from 'next/router';
import React from 'react';

import { useAppDispatch } from '@/store/store-hooks';

import { setSpotifyAuthStatus } from '@/state/globalSlice';

import LogoutIcon from '~/svg/logout-icon.svg';
const LogoutButton: React.FC = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    router.push('/');
    dispatch(setSpotifyAuthStatus(false));
  };
  return (
    <button
      className='bg-spotify-green text-spotify-black exsm:px-0 flex min-w-[50px] items-center justify-center gap-3 rounded-full px-4 py-1.5 text-xl font-bold shadow-lg transition-all duration-200 ease-linear hover:bg-opacity-80 disabled:cursor-not-allowed disabled:opacity-50'
      onClick={handleLogout}
    >
      <h1 className='exsm:hidden text-xl'>Logout</h1>
      <LogoutIcon className='h-6 w-6' />
    </button>
  );
};
export default LogoutButton;
