import React from 'react';
import {
    useTextComposeClassName,
} from '@/shared/ui/typography/Text/hooks/useTextComposeClassName.ts';


export type TextColor =
    'main'
    | 'inversion'
    | 'link'
    | 'danger'
    | 'light'
    | 'second';

export type TextSize =
    'small'
    | 'medium'
    | 'large';

export type TextProps =
    {
        inline?: boolean;
        color?: TextColor;
        size?: TextSize;
        lines?: number;
    }
    & React.ComponentPropsWithoutRef<'p'>;

const Text: React.FC<TextProps> = (props) => {
    const { inline, size, color, className, lines, style, ...other } = props;
    const composedClassName: string                                  = useTextComposeClassName(className, size, color, lines);

    return (
        inline
        ? <span
            { ...other }
            className={ composedClassName }
            style={ { ...style, WebkitLineClamp: lines ?? '' } }
        />
        : <p
            { ...other }
            className={ composedClassName }
            style={ { ...style, WebkitLineClamp: lines ?? '' } }
        />
    );
};

export default React.memo(Text);