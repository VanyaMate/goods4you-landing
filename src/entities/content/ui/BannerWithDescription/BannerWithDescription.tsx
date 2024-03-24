import React from 'react';
import css from './BannerWithDescription.module.scss';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import Text from '@/shared/ui/typography/Text/Text.tsx';


export type BannerWithDescriptionProps = {
    title: string;
    description: string;
    extra?: React.ReactNode;
};

const BannerWithDescription: React.FC<BannerWithDescriptionProps> = (props) => {
    const { title, description, extra } = props;

    return (
        <section className={ css.container }>
            <div className={ css.info }>
                <Title className={ css.title } level={ 2 }>{ title }</Title>
                <Text className={ css.description }>{ description }</Text>
            </div>
            <div className={ css.extra }>
                { extra }
            </div>
        </section>
    );
};

export default React.memo(BannerWithDescription);