import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const generateId = () => {
  let key = 0;
  return () => {
    key += 1;
    return key;
  };
};

const getNextId = generateId();

export {
  getNextId,
  ScrollToTop
};
