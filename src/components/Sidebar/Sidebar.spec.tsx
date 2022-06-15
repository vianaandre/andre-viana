import { render } from '@testing-library/react';
import { settings } from 'config/settings';
import { Sidebar } from './Sidebar';

describe('<Sidebar />', () => {
    it('', () => {
        render(<Sidebar data={settings.info} />);
    });
});
