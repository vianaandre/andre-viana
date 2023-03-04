import React, { useEffect } from 'react';

import { ContainerScrollIndicator } from './styles';

export const ScrollIndicator: React.FC = () => {
  useEffect(() => {
    window.onscroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      (document.getElementById('my_bar') as HTMLDivElement).style.height = `${scrolled}%`;
    };
  });

  return (
    <ContainerScrollIndicator>
      <div className="progress_bar" id="my_bar" />
      <div className="line_base" />
    </ContainerScrollIndicator>
  );
};
