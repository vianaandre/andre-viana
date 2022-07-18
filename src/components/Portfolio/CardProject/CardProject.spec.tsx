import { render } from '@testing-library/react';
import ProjectDesktop from 'common/assets/project-desktop.png';
import { CardProject } from './CardProject';

describe('<Sidebar />', () => {
  it('', () => {
    render(<CardProject
      category="web"
      href="#"
      title="Verdade Missal"
      image={ProjectDesktop}
    />);
  });
});
