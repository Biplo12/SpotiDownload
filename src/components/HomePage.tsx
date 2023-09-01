import React from 'react';

import useSpotifyAuthStatus from '@/hooks/useSpotifyAuthStatus';

import AboutTheProcess from '@/components/AboutTheProcess/AboutTheProcess';
import HowToUse from '@/components/HowToUse/HowToUse';
import LoginPage from '@/components/LoginPage/LoginPage';
import Main from '@/components/MainPage/Main';

import { useAppSelector } from '@/store/store-hooks';

const HomePage: React.FC = (): JSX.Element => {
  useSpotifyAuthStatus();
  const spotifyAuthStatus = useAppSelector(
    (state) => state.global.spotifyAuthStatus
  );

  return (
    <div className='flex w-full flex-col items-center justify-center bg-[#3144A3]'>
      {spotifyAuthStatus ? <Main /> : <LoginPage />}
      <HowToUse />
      <AboutTheProcess />
    </div>
  );
};
export default HomePage;
