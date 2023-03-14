import type { NextPage } from 'next';

import { Base } from 'layouts/Base';
import { Contact as ContactLayout } from 'components/Contact';
import { SEO } from 'components/SEO';

const Contact: NextPage = () => {
  return (
    <Base>
      <SEO
        title="Contato // André Viana"
        description="André Viana | andredapperviana@gmail.com &amp; +55 (45) 98837-8294"
        image="favicon.png"
        url="https://vianaandre.com/contact"
      />
      <ContactLayout />
    </Base>
  );
};

export default Contact;
