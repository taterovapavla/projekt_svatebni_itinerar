import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import background from '../../../public/images/arrowup.png';
import './style.css';

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
        <button className="goToTopButton" onClick={onScroll}></button>
      )}
    </>
  );
};
