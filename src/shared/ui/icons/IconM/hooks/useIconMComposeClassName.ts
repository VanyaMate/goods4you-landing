import { useMemo } from 'react';
import { cn } from '@vanyamate/helpers/react/classname.ts';
import css from '@/shared/ui/icons/IconM/IconM.module.scss';
import { IconMSize } from '@/shared/ui/icons/IconM/IconM.tsx';


export const useIconMComposeClassName = function (className?: string, size?: IconMSize): string {
    return useMemo(() => cn(
        'material-symbols-outlined',
        className,
        css.container,
        size === 'small' && css.small,
        (size === 'medium' || size === undefined) && css.medium,
        size === 'large' && css.large,
    ), [ className, size ]);
};