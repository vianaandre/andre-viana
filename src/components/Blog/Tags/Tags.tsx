import React from 'react';
import { ContainerTags } from './styles';

export const Tags: React.FC = () => {
  return (
    <ContainerTags>
      <ul>
        <li>
          <a href="#frontend">
            todos
          </a>
        </li>
        <li>
          <a href="#frontend">
            frontend
          </a>
        </li>
        <li>
          <a href="#frontend">
            mobile
          </a>
        </li>
      </ul>
    </ContainerTags>
  );
};
