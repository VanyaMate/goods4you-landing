import React from 'react';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import Text from '@/shared/ui/typography/Text/Text.tsx';
import css from './TitledQuote.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type TitledQuoteProps =
    {
        title: string;
        quotes: string[];
        author: string;
    }
    & React.ComponentPropsWithoutRef<'section'>;

const TitledQuote: React.FC<TitledQuoteProps> = (props) => {
    const { title, quotes, author, className, ...other } = props;

    return (
        <section className={ cn(css.container, className) } { ...other }>
            <Title level={ 2 }>{ title }</Title>
            <blockquote className={ css.quote }>
                <div>
                    {
                        quotes.map((quote, index) => <Text key={ index }>{ quote }</Text>)
                    }
                </div>
                <footer className={ css.author }>
                    <Text size="large">
                        <b>{ author }</b>
                    </Text>
                </footer>
            </blockquote>
        </section>
    );
};

export default React.memo(TitledQuote);