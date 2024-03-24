import React from 'react';
import css from './Link.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type LinkProps =
    {}
    & React.ComponentPropsWithoutRef<'a'>;

const Link: React.FC<LinkProps> = (props) => {
    const { className, ...other } = props;
    return (
        <a { ...other } className={ cn(className, css.container) }/>
    );
};

export default React.memo(Link);