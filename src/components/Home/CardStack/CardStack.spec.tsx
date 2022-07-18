import { render } from '@testing-library/react';
import My from 'common/assets/eu.png';
import { CardStack } from './CardStack';

describe('<Sidebar />', () => {
  it('', () => {
    render(<CardStack title="teste" image={My} />);
  });
});
