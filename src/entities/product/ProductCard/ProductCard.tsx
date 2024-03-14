import React from 'react';
import { ProductShortInfo } from '@/types/product/product.types.ts';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import Text from '@/shared/ui/typography/Text/Text.tsx';
import { cn } from '@vanyamate/helpers/react/classname';
import css from './ProductCard.module.scss';
import Image from '@/shared/ui/images/Image/Image.tsx';
import Link from '@/shared/ui/links/Link/Link.tsx';


export type ProductCardProps =
    {
        product: ProductShortInfo;
    }
    & React.ComponentPropsWithoutRef<'article'>;

const ProductCard: React.FC<ProductCardProps> = (props) => {
    const { product, className, ...other } = props;

    return (
        <article className={ cn(className, css.container) } { ...other }>
            <div className={ css.link }>
                <Link aria-label={ product.title } href={ `/#product/${ product.id }` }>
                    <Image
                        alt={ product.imageAlt }
                        loading="lazy"
                        quad
                        src={ product.imageUrl }
                    />
                </Link>
                <Title className={ css.title } level={ 4 }>
                    <Link href={ `/#product/${ product.id }` }>
                        <Text inline>{ product.title }</Text>
                    </Link>
                </Title>
            </div>
            <Text className={ css.price } size="large">{ product.price } $</Text>
        </article>
    );
};

export default React.memo(ProductCard);