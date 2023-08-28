import React from 'react';

const BARS_COUNT = 100;

const MusicBars: React.FC = (): JSX.Element => {
  return (
    <div className='bars flex h-12 w-full items-center justify-center gap-1'>
      {Array.from(Array(BARS_COUNT).keys()).map((i) => {
        return (
          <div
            className='bar'
            key={i}
            style={
              {
                '--animation-duration': `${Math.random() + 0.5}s`,
                '--delay': `${Math.random()}`,
                '--max-height': `${Math.random()}`,
                '--scale-y': `${Math.random()}`,
              } as React.CSSProperties
            }
          ></div>
        );
      })}
    </div>
  );
};

export default MusicBars;
