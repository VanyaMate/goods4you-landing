import React from 'react';
import {
    useTextComposeClassName,
} from '@/shared/ui/typography/Text/hooks/useTextComposeClassName.ts';


export type TextColor =
    'main'
    | 'inversion'
    | 'link'
    | 'danger'
    | 'light';

export type TextSize =
    'small'
    | 'medium'
    | 'large';

export type TextProps =
    {
        inline?: boolean;
        color?: TextColor;
        size?: TextSize;
    }
    & React.ComponentPropsWithoutRef<'p'>;

const Text: React.FC<TextProps> = (props) => {
    const { inline, size, color, className, ...other } = props;
    const composedClassName: string                    = useTextComposeClassName(className, size, color);

    return (
        inline
        ? <span { ...other } className={ composedClassName }/>
        : <p { ...other } className={ composedClassName }/>
    );
};

export default React.memo(Text);