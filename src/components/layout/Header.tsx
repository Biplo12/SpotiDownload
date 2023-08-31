import React from 'react';

import Logo from '@/components/layout/Partials/Header/Logo';
const Header: React.FC = (): JSX.Element => {
  return (
    <header className='absolute left-0 top-0 flex items-center justify-start bg-transparent p-4'>
      <Logo />
    </header>
  );
};
export default Header;
