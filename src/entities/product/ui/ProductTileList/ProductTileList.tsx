import React from 'react';
import ProductCard from '@/entities/product/ui/ProductCard/ProductCard.tsx';
import { Product } from '@/types/product/product.types.ts';
import css from './ProductTileList.module.scss';


export type ProductTileListForFiltersProps = {
    products: Product[]
};

const ProductTileListForFilters: React.FC<ProductTileListForFiltersProps> = (props) => {
    const { products } = props;

    return (
        <div className={ css.container }>
            {
                products.map((product) => (
                    <ProductCard key={ product.id } product={ product }/>
                ))
            }
        </div>
    );
};

export default React.memo(ProductTileListForFilters);