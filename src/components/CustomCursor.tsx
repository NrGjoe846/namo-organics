import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    /* Scroll Progress Bar at Top of Page */
    <div
      className="scroll-progress-bar"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

