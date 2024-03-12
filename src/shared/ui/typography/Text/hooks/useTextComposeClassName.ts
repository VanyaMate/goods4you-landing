import { TextColor, TextSize } from '@/shared/ui/typography/Text/Text.tsx';
import { useMemo } from 'react';
import css from '../Text.module.scss';
import { cn } from '@vanyamate/helpers/react/classname.ts';


export const useTextComposeClassName = function (className?: string, size?: TextSize, color?: TextColor) {
    return useMemo(() => cn(
        css.container,
        className,
        size === 'small' && css.small_size,
        size === 'large' && css.large_size,
        size === 'medium' && css.medium_size,
        color === 'main' && css.main_color,
        color === 'inversion' && css.inversion_color,
        color === 'link' && css.link_color,
        color === 'danger' && css.danger_color,
        color === 'light' && css.light_color,
    ), [ size, className, color ]);
};