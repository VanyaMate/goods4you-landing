import React, { useEffect, useState } from 'react';
import { useUrlWithOptions } from '@/shared/hooks/useUrlWithOptions.ts';


export type FetchError = {
    code: number;
    message: string;
}

export type FetchOptions = Record<string, string>;


export type Fetch<DataType> = {
    pending: boolean;
    error: FetchError | null;
    products: DataType[];
    options: FetchOptions;
    setOptions: React.Dispatch<React.SetStateAction<FetchOptions>>;
}

export const useFetchProducts = function <ProductMap, ProductApi> (url: string, initialOptions: FetchOptions, mapper: (data: ProductApi) => ProductMap): Fetch<ProductMap> {
    const [ pending, setPending ]   = useState<boolean>(true);
    const [ error, setError ]       = useState<FetchError | null>(null);
    const [ products, setProducts ] = useState<ProductMap[]>([]);
    // Будет 2+ рендера. :(
    const [ options, setOptions ]   = useState<FetchOptions>(initialOptions);
    const urlWithOptions            = useUrlWithOptions(url, options);

    useEffect(() => {
        const abortController = new AbortController();
        let aborted: boolean  = false;
        setPending(() => true);
        setError(() => null);

        fetch(urlWithOptions, {
            method : 'GET',
            signal : abortController.signal,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async (response) => {
                if (response.ok) {
                    return await response.json();
                } else {
                    setError({ code: response.status, message: await response.json() });
                    return Promise.reject();
                }
            })
            .then((products) => {
                setProducts((prev) => prev.concat(products.map(mapper)));
            })
            .catch((error) => {
                if (!aborted) {
                    setError({
                        message: error.message ?? 'Server error',
                        code   : error.code ?? 404,
                    });
                }
            })
            .finally(() => {
                !aborted && setPending(false);
            });

        return () => {
            aborted = true;
            abortController.abort();
        };
    }, [ mapper, urlWithOptions ]);

    return {
        pending, options, setOptions, error, products,
    };
};
// filters
// products
// error
// pending

// setFilter