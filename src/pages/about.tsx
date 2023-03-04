import React from 'react';

import type { NextPage } from 'next';

import { Base } from 'layouts/Base';
import { AboutLayout } from 'components/About';

const About: NextPage = () => {
  return (
    <Base>
      <AboutLayout />
    </Base>
  );
};

export default About;
