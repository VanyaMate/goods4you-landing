import { render, screen } from '@testing-library/react';
import SiteMenu from '@/widget/pages/ui/SiteMenu/SiteMenu.tsx';


export default () => {
    render(
        <SiteMenu
            items={ [
                'Item 1', 'Item 2',
            ] }
            siteLogo="Logo"
        />,
    );

    screen.getByText('Logo');
    screen.getByText('Item 1');
    screen.getByText('Item 2');
}