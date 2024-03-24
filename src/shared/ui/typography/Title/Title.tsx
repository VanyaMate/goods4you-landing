import React, { JSX } from 'react';
import css from './Title.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type TitleLevel =
    1
    | 2
    | 3
    | 4
    | 5
    | 6;

export type TitleProps =
    {
        level: TitleLevel;
        lines?: number;
    }
    & React.ComponentPropsWithoutRef<'h1'>;

const Title: React.FC<TitleProps> = (props) => {
    const { level, className, style, lines, ...other } = props;
    const compositeClassName                           = cn(
        className,
        css.container,
        lines !== undefined ? css.lines : null,
    );
    const HeadingTag                                   = `h${ level }` as keyof Pick<JSX.IntrinsicElements, 'h1'>;

    return <HeadingTag
        { ...other }
        className={ compositeClassName }
        style={ { ...style, WebkitLineClamp: lines ?? '' } }
    />;
};

export default React.memo(Title);