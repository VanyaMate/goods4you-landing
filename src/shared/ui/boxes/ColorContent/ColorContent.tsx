import React from 'react';
import {
    useColorContentComposeClassName,
} from '@/shared/ui/boxes/ColorContent/hooks/useColorContentComposeClassName.ts';


export type ColorContentType =
    'main'
    | 'mark'
    | 'light'
    | 'second';

export type ColorContentProps =
    {
        color?: ColorContentType;
    }
    & React.ComponentPropsWithoutRef<'div'>;

const ColorContent: React.FC<ColorContentProps> = (props) => {
    const { color, className, ...other } = props;
    const composeClassName               = useColorContentComposeClassName(className, color);

    return (
        <div className={ composeClassName } { ...other }/>
    );
};

export default React.memo(ColorContent);