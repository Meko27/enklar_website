'use client';

import React from 'react';

const ScrollButton = ({ label }: { label: string }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href="#" className="btn btn-primary justify-center" onClick={handleScroll}>
      {label}
    </a>
  );
};

export default ScrollButton;