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
          className="goToTopButton"
          onClick={onScroll}
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '5px',
            height: '30px',
            width: '30px',
            fontSize: '30px',
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
