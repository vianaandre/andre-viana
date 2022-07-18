import React from 'react';
import {
  ContainerTimeline,
  ContainerCircleEffect,
  ContainerLine,
} from './styles';
import { ITimeline } from './interface';

export const Timeline: React.FC<ITimeline> = ({ text, isLastLine }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <ContainerTimeline
      onMouseOut={() => setIsFocused(false)}
      onMouseOver={() => setIsFocused(true)}
      isLastLine={isLastLine}
    >
      <div className={`year ${isFocused ? 'isActive' : ''}`}>
        <p>{new Date().getFullYear()}</p>
      </div>
      <ContainerCircleEffect>
        <div className={isFocused ? 'active' : ''} />
      </ContainerCircleEffect>
      <p>{text}</p>
      <ContainerLine className="line" isLastLine={isLastLine} />
    </ContainerTimeline>
  );
};
