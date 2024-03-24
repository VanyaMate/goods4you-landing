import React from 'react';
import Button, { ButtonProps } from '@/shared/ui/buttons/Button/Button.tsx';
import { cn } from '@vanyamate/helpers/react/classname';
import css from './DetailsButton.module.scss';
import IconM from '@/shared/ui/icons/IconM/IconM.tsx';


export type DetailsButtonProps =
    { isActive: boolean }
    & ButtonProps;

const DetailsButton: React.FC<DetailsButtonProps> = (props) => {
    const { className, children, isActive, ...other } = props;

    return (
        <Button
            { ...other }
            className={ cn(className, css.container, 'button_clear', isActive && css.active) }
        >
            <span>{ children }</span>
            <IconM className={ css.icon } size="large">close</IconM>
        </Button>
    );
};

export default React.memo(DetailsButton);