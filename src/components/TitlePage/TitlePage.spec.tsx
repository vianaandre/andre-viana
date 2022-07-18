import { render } from '@testing-library/react';
import { TitlePage } from './TitlePage';

describe('<Sidebar />', () => {
  it('', () => {
    render(
      <TitlePage
        title="Test"
        breadcrumb={[{ title: 'test', href: 'teste' }]}
      />,
    );
  });
});
