import { render, screen } from '@testing-library/react';
import Title from '@/shared/ui/typography/Title/Title.tsx';


export default () => {
    render(
        <>
            <Title level={ 1 }>Level 1</Title>
            <Title level={ 2 }>Level 2</Title>
            <Title level={ 3 }>Level 3</Title>
            <Title level={ 4 }>Level 4</Title>
            <Title level={ 5 }>Level 5</Title>
            <Title level={ 6 }>Level 6</Title>
        </>,
    );

    screen.getByRole('heading', { level: 1 });
    screen.getByRole('heading', { level: 2 });
    screen.getByRole('heading', { level: 3 });
    screen.getByRole('heading', { level: 4 });
    screen.getByRole('heading', { level: 5 });
    screen.getByRole('heading', { level: 6 });
}