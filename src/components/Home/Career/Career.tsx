import React from 'react';
import { Title } from 'components/Home/Title';
import { Timeline } from 'components/Home/Timeline';
import { ContainerCareer } from './styles';

export const Career: React.FC = () => {
  return (
    <ContainerCareer>
      <Title title="Carreira" />
      <div className="timeline">
        <Timeline
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
          date=""
          isLastLine={false}
        />
        <Timeline
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
          date=""
          isLastLine={false}
        />
        <Timeline
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
          date=""
          isLastLine
        />
      </div>
    </ContainerCareer>
  );
};
