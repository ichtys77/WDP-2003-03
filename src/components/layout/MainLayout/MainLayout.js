import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children, addViewport }) => {
  useWindowsSize(addViewport);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  addViewport: PropTypes.func,
};

const useWindowsSize = addViewport => {
  const isClient = typeof window === 'object';

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = () => {
      setWindowSize(getSize());
      addViewport(getSize());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient, getSize, addViewport]);

  return windowSize;
};

export default MainLayout;
