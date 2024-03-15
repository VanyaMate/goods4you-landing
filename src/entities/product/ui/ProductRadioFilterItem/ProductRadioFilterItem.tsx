import React, { useCallback, useState } from 'react';
import {
    ProductFilterItems,
    ProductFilterOnChangeHandler,
} from '@/entities/product/ui/ProductFilter/ProductFilter.tsx';
import css from './ProductRadioFilterItem.module.scss';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import { cn } from '@vanyamate/helpers/react/classname';
import Text from '@/shared/ui/typography/Text/Text.tsx';


export type ProductRadioFilterItemProps = {
    title: string;
    items: ProductFilterItems;
    onChange: ProductFilterOnChangeHandler;
};

const ProductRadioFilterItem: React.FC<ProductRadioFilterItemProps> = (props) => {
    const { title, items, onChange }    = props;
    const [ filterData, setFilterData ] = useState<ProductFilterItems>({ ...items });
    const onChangeHandler               = useCallback((label: string, value: string) => {
        const newFilter: ProductFilterItems = {
            ...filterData, [label]: value === 'false' ? 'true' : 'false',
        };
        onChange(title, newFilter);
        setFilterData(newFilter);
    }, [ filterData, onChange, title ]);

    return (
        <article className={ css.container }>
            <Title level={ 5 }>{ title }</Title>
            <div className={ css.list }>
                {
                    Object.entries(filterData).map(([ label, value ]) => (
                        <Button
                            className={ cn(css.button) }
                            key={ label }
                            onClick={ () => onChangeHandler(label, value) }
                            styleType={ value === 'true' ? 'primary' : undefined }
                            type="button"
                        >
                            <Text size="medium"><b>{ label }</b></Text>
                        </Button>
                    ))
                }
            </div>
        </article>
    );
};

export default React.memo(ProductRadioFilterItem);