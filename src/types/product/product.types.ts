export type Product = {
    id: string;
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    price: number;
}

export type ProductShortInfo = Pick<Product, 'id' | 'imageAlt' | 'imageUrl' | 'title' | 'price'>