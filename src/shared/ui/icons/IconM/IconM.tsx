import React from 'react';
import { cn } from '@vanyamate/helpers/react/classname';
import css from './IconM.module.scss';


export type IconMSizes =
    'small'
    | 'medium'
    | 'large';

export type IconMProps =
    {
        size?: IconMSizes;
    }
    & React.ComponentPropsWithoutRef<'span'>;

const IconM: React.FC<IconMProps> = (props) => {
    const { className, size, ...other } = props;
    const compositeClassName            = cn(
        'material-symbols-outlined',
        className,
        css.container,
        size === 'small' && css.small,
        (size === 'medium' || size === undefined) && css.medium,
        size === 'large' && css.large,
    );

    return (
        <span { ...other } className={ compositeClassName }/>
    );
};

export default React.memo(IconM);