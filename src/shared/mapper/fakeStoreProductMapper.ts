import { FakeStoreApiProduct, Product } from '@/types/product/product.types.ts';


export const fakeStoreProductMapper = function (fakeProduct: FakeStoreApiProduct): Product {
    return {
        id         : fakeProduct.id.toString(),
        category   : fakeProduct.category,
        price      : fakeProduct.price,
        imageUrl   : fakeProduct.image,
        imageAlt   : fakeProduct.title,
        description: fakeProduct.description,
        title      : fakeProduct.title,
    };
};