import { useState, useEffect } from 'react';

/**
 * Custom hook to track window width and height.
 * Optimized with requestAnimationFrame to prevent layout thrashing on rapid resize.
 */
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let timeoutId = null;

    const handleResize = () => {
      // Throttle window resize updates using requestAnimationFrame or short debounce
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
      
      timeoutId = requestAnimationFrame(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Initial call
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
    };
  }, []);

  return windowSize;
}
