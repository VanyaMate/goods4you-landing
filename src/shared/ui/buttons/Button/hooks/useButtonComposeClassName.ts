import { ButtonStyleType } from '@/shared/ui/buttons/Button/Button.tsx';
import { useMemo } from 'react';
import { cn } from '@vanyamate/helpers/react/classname';
import css from '@/shared/ui/buttons/Button/Button.module.scss';


export const useButtonComposeClassName = function (className?: string, styleType?: ButtonStyleType, loading?: boolean): string {
    return useMemo(() => cn(
        className,
        css.container,
        (styleType === undefined || styleType === 'primary') && css.primary,
        styleType === 'second' && css.second,
        styleType === 'light' && css.light,
        styleType === 'danger' && css.danger,
        loading && css.loading,
    ), [ className, styleType, loading ]);
};