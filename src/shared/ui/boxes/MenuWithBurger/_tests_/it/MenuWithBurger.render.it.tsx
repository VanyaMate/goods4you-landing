import { render, screen } from '@testing-library/react';
import MenuWithBurger from '@/shared/ui/boxes/MenuWithBurger/MenuWithBurger.tsx';


export default () => {
    render(
        <MenuWithBurger
            extra={
                <div>extra</div>
            }
            items={ [
                {
                    text: 'Item 1',
                    href: '#',
                },
                {
                    text: 'Item 2',
                    href: '#',
                },
            ] }
            siteLogo="Logo"
        />,
    );

    screen.getByText('Logo');
    screen.getByText('Item 1');
    screen.getByText('Item 2');
    screen.getByText('extra');
}