import { ColorContentType } from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';
import css from '../ColorContent.module.scss';
import { useMemo } from 'react';
import { cn } from '@vanyamate/helpers/react/classname';


export const useColorContentComposeClassName = function (className?: string, color?: ColorContentType) {
    return useMemo(() => cn(
        css.container,
        className,
        color === 'second' && css.second,
        color === 'light' && css.light,
        color === 'mark' && css.mark,
    ), [ className, color ]);
};