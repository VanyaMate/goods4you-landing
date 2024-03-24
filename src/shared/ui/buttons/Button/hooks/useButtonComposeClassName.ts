import { ButtonStyleType } from '@/shared/ui/buttons/Button/Button.tsx';
import { useMemo } from 'react';
import { cn } from '@vanyamate/helpers/react/classname';
import css from '@/shared/ui/buttons/Button/Button.module.scss';


export const useButtonComposeClassName = function (className?: string, styleType?: ButtonStyleType, loading?: boolean, quad?: boolean): string {
    return useMemo(() => cn(
        className,
        css.container,
        'button',
        styleType === 'primary' && 'button_primary',
        styleType === 'second' && 'button_second',
        styleType === 'light' && 'button_light',
        styleType === 'border' && 'button_border',
        quad && 'button_quad',
        loading && css.loading,
    ), [ className, styleType, quad, loading ]);
};