import Link from 'next/link';
import React from 'react';
const Logo: React.FC = (): JSX.Element => {
  return (
    <Link href='/' className='text-3xl font-bold text-white'>
      <span className='text-spotify-green'>Spoti</span>
      Download
    </Link>
  );
};
export default Logo;
