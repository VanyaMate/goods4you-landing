export type Product = {
    id: string;
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    price: number;
    category: string;
}

export type ProductShortInfo = Pick<Product, 'id' | 'imageAlt' | 'imageUrl' | 'title' | 'price'>


//
export type FakeStoreApiProduct = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: FakeStoreApiProductRating
}

export interface FakeStoreApiProductRating {
    rate: number;
    count: number;
}