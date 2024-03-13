import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import { expect } from 'vitest';
import css from '@/shared/ui/buttons/Button/Button.module.scss';
import { userEvent } from '@testing-library/user-event';


export default async () => {
    let onClickWorks: string      = '';
    let onClickAsyncWorks: string = '';

    const onClickHandler = function (_: React.MouseEvent<HTMLButtonElement>, data: string) {
        onClickWorks = data;
    };

    const onClickAsyncHandler = function (_: React.MouseEvent<HTMLButtonElement>, data: string) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                onClickAsyncWorks = data;
                resolve();
            }, 500);
        });
    };

    render(
        <>
            <Button
                data="sync works"
                onClick={ onClickHandler }
            >
                OnClick
            </Button>
            <Button
                data="async works"
                onClickAsync={ onClickAsyncHandler }
            >
                OnClickAsync
            </Button>
        </>,
    );

    const onClickButton: HTMLButtonElement      = screen.getByText('OnClick');
    const onClickAsyncButton: HTMLButtonElement = screen.getByText('OnClickAsync');

    await userEvent.click(onClickButton);
    expect(onClickWorks).toBe('sync works');

    await userEvent.click(onClickAsyncButton);
    expect(onClickAsyncWorks).not.toBe('async works');

    await waitFor(() => {
        expect(onClickAsyncButton.classList.contains(css.loading)).toBe(true);
    });
    await waitFor(() => {
        expect(onClickAsyncButton.classList.contains(css.loading)).toBe(false);
    });

    expect(onClickAsyncWorks).toBe('async works');
}