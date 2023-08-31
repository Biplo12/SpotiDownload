import React from 'react';

import AboutTheProcess from '@/components/AboutTheProcess/AboutTheProcess';
import HowToUse from '@/components/HowToUse/HowToUse';
import LandingPage from '@/components/LandingPage/LandingPage';

const StartPage: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-auto min-h-[100vh] w-full flex-col bg-[#3144A3]'>
      <LandingPage />
      <HowToUse />
      <AboutTheProcess />
    </div>
  );
};
export default StartPage;
