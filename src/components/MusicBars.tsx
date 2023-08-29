import React, { useEffect, useState } from 'react';

const MusicBars: React.FC = (): JSX.Element => {
  const [barsCount, setBarsCount] = useState(100);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const barWidth = 10;
      const barsCount = Math.floor(screenWidth / barWidth) - 2;
      setBarsCount(barsCount);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className='bars flex h-12 w-full items-end justify-center gap-1'
      style={{ width: '100%' }}
    >
      {Array.from(Array(barsCount).keys()).map((i) => {
        return (
          <div
            className='bar'
            key={i}
            style={
              {
                '--animation-duration': `${Math.random() + 0.5}s`,
                '--delay': `${Math.random()}`,
                '--max-height': '1',
                '--scale-y': '1',
              } as React.CSSProperties
            }
          ></div>
        );
      })}
    </div>
  );
};

export default MusicBars;
