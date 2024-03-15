import React from 'react';
import { useFetchProducts } from '@/entities/product/hooks/useFetchProducts.ts';
import { FakeStoreApiProduct, Product } from '@/types/product/product.types.ts';
import ProductCard from '@/entities/product/ui/ProductCard/ProductCard.tsx';
import { fakeStoreProductMapper } from '@/shared/mapper/fakeStoreProductMapper.ts';


export type ProductCatalogWithFiltersProps = {};

const ProductCatalogWithFilters: React.FC<ProductCatalogWithFiltersProps> = (props) => {
    const {} = props;

    const {
              pending,
              products,
              options,
              setOptions,
              error,
          } = useFetchProducts<Product, FakeStoreApiProduct>('https://fakestoreapi.com/products', {}, fakeStoreProductMapper);

    return (
        <div>
            <h1>Filters</h1>
            <div style={ {
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20,
            } }>
                {
                    products.map((product) => (
                        <ProductCard key={ product.id } product={ product }/>
                    ))
                }
            </div>
        </div>
    );
};

export default React.memo(ProductCatalogWithFilters);