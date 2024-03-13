import { render, screen } from '@testing-library/react';
import MenuWithBurger from '@/shared/ui/boxes/MenuWithBurger/MenuWithBurger.tsx';


export default () => {
    render(
        <MenuWithBurger
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