import React from 'react';
import css from './PageContent.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type PageContentProps =
    {}
    & React.ComponentPropsWithoutRef<'div'>;

const PageContent: React.FC<PageContentProps> = (props) => {
    const { className, ...other } = props;

    return (
        <div className={ css.container }>
            <div { ...other } className={ cn(css.content, className) }/>
        </div>
    );
};

export default React.memo(PageContent);