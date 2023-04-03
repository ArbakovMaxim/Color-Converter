import { useState, useEffect } from 'react';

export const useResize = () => {
  const SCREEN_SM = 501;
  const SCREEN_MD = 768;
  const SCREEN_LG = 992;
  const SCREEN_XL = 1200;
  const SCREEN_XXL = 1400;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = event => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};
