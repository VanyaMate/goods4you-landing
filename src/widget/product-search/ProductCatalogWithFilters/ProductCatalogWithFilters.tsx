import React, { useMemo } from 'react';
import { useFetchProducts } from '@/entities/product/hooks/useFetchProducts.ts';
import { FakeStoreApiProduct, Product } from '@/types/product/product.types.ts';
import { fakeStoreProductMapper } from '@/shared/mapper/fakeStoreProductMapper.ts';
import ProductFilter, {
    ProductFilters,
} from '@/entities/product/ui/ProductFilter/ProductFilter.tsx';
import css from './ProductCatalogWithFilters.module.scss';
import ProductTileList from '@/entities/product/ui/ProductTileList/ProductTileList.tsx';


export type ProductCatalogWithFiltersProps = {};

const ProductCatalogWithFilters: React.FC<ProductCatalogWithFiltersProps> = (props) => {
    const {} = props;

    /**
     * get filters from url
     *
     * make query to /api by filters
     * get filters
     * get products
     * set filters
     * set products
     *
     * - pending (fetch)
     * - products
     * - filters
     * - error
     * - setFilters ->
     *      - update url
     *      - update filters
     *          - set filters
     *          - set products
     */

    const {
              products,
              setOptions,
          } = useFetchProducts<Product, FakeStoreApiProduct>('https://fakestoreapi.com/products', {}, fakeStoreProductMapper);

    // Mock filters
    const filters: ProductFilters = useMemo(() => (
        {
            Category: {
                type   : 'radio',
                onApply: setOptions,
                items  : {
                    'smartphones': 'false',
                    'laptops'    : 'false',
                    'sneakers'   : 'false',
                },
            },
        }
    ), [ setOptions ]);

    return (
        <div className={ css.container }>
            <ProductFilter
                filters={ filters }
                onApply={ (filter) => {
                    console.log(filter);
                } }
                onReset={ () => {
                } }
            />
            <ProductTileList products={ products }/>
        </div>
    );
};

export default React.memo(ProductCatalogWithFilters);