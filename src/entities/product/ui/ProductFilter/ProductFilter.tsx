import React, { useCallback, useEffect, useRef } from 'react';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import css from './ProductFilter.module.scss';
import ProductRadioFilterItem
    from '@/entities/product/ui/ProductRadioFilterItem/ProductRadioFilterItem.tsx';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';


export type ProductFilterType =
    'checkbox'
    | 'radio'
    | 'text'
    | 'number';
export type ProductFilterItems = Record<string, string>;
export type ProductFilterItem = {
    type: ProductFilterType;
    items: ProductFilterItems;
};
export type ProductFilters = Record<string, ProductFilterItem>;
export type ProductFilterOnChangeHandler = (title: string, data: ProductFilterItems) => void;
export type ProductFilterProps = {
    filters: ProductFilters;
    onApply: (filters: ProductFilters) => void;
    onReset: () => void;
};

const ProductFilter: React.FC<ProductFilterProps> = (props) => {
    const { filters, onApply, onReset } = props;
    const localFilters                  = useRef<ProductFilters>(JSON.parse(JSON.stringify(filters)));

    useEffect(() => {
        localFilters.current = JSON.parse(JSON.stringify(filters));
    }, [ filters ]);

    const onLocalFilterChange = useCallback((title: string, items: ProductFilterItems) => {
        localFilters.current[title].items = items;
    }, [ localFilters ]);

    return (
        <ColorContent className={ css.container } color="light">
            <section className={ css.content }>
                <Title level={ 3 }>Selection by parameters</Title>
                {
                    Object.entries(localFilters.current).map(([ title, filter ]) => {
                        switch (filter.type) {
                            case 'text':
                                return 'Input';
                            case 'radio':
                                return <ProductRadioFilterItem
                                    items={ filter.items }
                                    key={ title }
                                    onChange={ onLocalFilterChange }
                                    title={ title }
                                />;
                            case 'checkbox':
                                return 'Checkbox';
                            case 'number':
                                return 'Number';
                            default:
                                return null;
                        }
                    })
                }
                <div className={ css.buttons }>
                    <Button
                        className={ css.button }
                        onClick={ () => onApply(localFilters.current) }
                        styleType="second"
                        type="button"
                    >
                        Apply
                    </Button>
                    <Button
                        className={ css.button }
                        onClick={ onReset }
                        styleType="light"
                        type="button"
                    >
                        Reset
                    </Button>
                </div>
            </section>
        </ColorContent>
    );
};

export default React.memo(ProductFilter);