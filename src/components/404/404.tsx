import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

import { Container } from 'components/Container';
import Link from 'next/link';
import { Footer } from 'components/Footer';
import { Container404 } from './styles';

export const Layout404: React.FC = () => {
  return (
    <Container404>
      <Container>
        <div className="content">
          <h1 className="title">404</h1>
          <Tooltip.Provider delayDuration={100}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div>
                  <Link href="/">
                    <a>https://vianaandre.com/</a>
                  </Link>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="tooltip_footer" sideOffset={5} side="bottom">
                  <p>https://vianaandre.com/</p>
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      </Container>
      <Footer />
    </Container404>
  );
};
