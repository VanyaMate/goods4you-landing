import React from 'react';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';
import PageContent from '@/shared/ui/boxes/PageContent/PageContent.tsx';
import TitledQuote from '@/entities/content/ui/TitledQuote/TitledQuote.tsx';
import css from './AboutUsPageContent.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type AboutUsPageContentProps =
    {}
    & React.ComponentPropsWithoutRef<'div'>;


const AboutUsPageContent: React.FC<AboutUsPageContentProps> = (props) => {
    const { className, ...other } = props;

    return (
        <ColorContent { ...other } className={ cn(className, css.container) }
                      color="mark">
            <PageContent className={ css.content }>
                <TitledQuote
                    author="Goods4you"
                    className={ css.quote }
                    quotes={ [
                        'Every day a person has a choice what to spend his money on. Stores and websites offer an endless list of products.',
                        'But we will help you make the right choice!',
                    ] }
                    title="About us"
                />
            </PageContent>
        </ColorContent>
    );
};

export default React.memo(AboutUsPageContent);