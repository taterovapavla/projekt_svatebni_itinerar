import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import background from '../../../public/images/arrowup.png';

export const GoToTop = () => {
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 100) {
          setCanShow(true);
        } else {
          setCanShow(false);
        }
      },
      [],
    );
  });
  const onScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {' '}
      {canShow && (
        <button
          onClick={onScroll}
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            height: '40px',
            width: '40px',
            fontSize: '40px',
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#EBF4FB',
            borderStyle: 'none',
          }}
        ></button>
      )}
    </>
  );
};
