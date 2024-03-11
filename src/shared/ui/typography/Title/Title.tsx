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
    }
    & React.ComponentPropsWithoutRef<'h1'>;

const Title: React.FC<TitleProps> = (props) => {
    const { level, className, ...other } = props;
    const compositeClassName             = cn(className, css.container);
    const HeadingTag                     = `h${ level }` as keyof Pick<JSX.IntrinsicElements, 'h1'>;

    return <HeadingTag { ...other } className={ compositeClassName }/>;
};

export default React.memo(Title);