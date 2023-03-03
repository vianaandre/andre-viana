import React, { useCallback } from 'react';
import Link from 'next/link';

import { socialLinks } from 'common/data/social';
import { Email } from 'components/Icons/Email';
import { Linkedin } from 'components/Icons/Linkedin';
import { Github } from 'components/Icons/Github';
import { Whatsapp } from 'components/Icons/Whatsapp';
import { SocialProps } from 'common/interfaces/SocialProps';
import { Container } from 'components/Container';
import { ContainerFooter } from './styles';

export const Footer: React.FC = () => {
  const findIconPerType = useCallback((type: SocialProps) => {
    switch (type) {
      case SocialProps.EMAIL:
        return <Email />;
      case SocialProps.GITHUB:
        return <Github />;
      case SocialProps.LINKEDIN:
        return <Linkedin />;
      case SocialProps.WHATSAPP:
        return <Whatsapp />;
      default:
        return null;
    }
  }, []);

  return (
    <ContainerFooter>
      <Container>
        <ul>
          {socialLinks.map((item) => (
            <li key={item.link}>
              <Link href={item.link}>
                <a target="_black">
                  {findIconPerType(item.type)}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <p>
          © André Viana 2023
        </p>
      </Container>
    </ContainerFooter>
  );
};
