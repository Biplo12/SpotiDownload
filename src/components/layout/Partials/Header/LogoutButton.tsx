import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { useAppDispatch } from '@/store/store-hooks';

import { setSpotifyAuthStatus } from '@/state/globalSlice';

import LogoutIcon from '~/svg/logout-icon.svg';
const LogoutButton: React.FC = (): JSX.Element => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    router.push('/');
    dispatch(setSpotifyAuthStatus(false));
  };
  return (
    <button
      className='flex items-center justify-center gap-2 text-white'
      onClick={handleLogout}
      onMouseEnter={() => setIsButtonHovered(true)}
      onMouseLeave={() => setIsButtonHovered(false)}
    >
      <h1
        className={`text-2xl ${
          isButtonHovered ? 'text-spotify-green' : 'text-white'
        }`}
      >
        Logout
      </h1>
      <LogoutIcon
        className='h-6 w-6'
        fill={isButtonHovered ? '#1DB954' : 'white'}
      />
    </button>
  );
};
export default LogoutButton;
