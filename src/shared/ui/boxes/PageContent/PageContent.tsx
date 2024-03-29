import React from 'react';
import css from './PageContent.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type PageContentProps =
    {
        withPaddings?: boolean;
    }
    & React.ComponentPropsWithoutRef<'div'>;

const PageContent: React.FC<PageContentProps> = (props) => {
    const { className, withPaddings, ...other } = props;

    return (
        <div className={ css.container }>
            <div { ...other }
                 className={ cn(css.content, className, withPaddings && css.paddings) }/>
        </div>
    );
};

export default React.memo(PageContent);