import React from 'react';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';
import PageContent from '@/shared/ui/boxes/PageContent/PageContent.tsx';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import { cn } from '@vanyamate/helpers/react/classname';
import ProductCatalogWithFilters
    from '@/widget/product-search/ProductCatalogWithFilters/ProductCatalogWithFilters';


export type CatalogPageContentProps =
    {}
    & React.ComponentPropsWithoutRef<'div'>;

const CatalogPageContent: React.FC<CatalogPageContentProps> = (props) => {
    const { className, ...other } = props;

    return (
        <ColorContent { ...other }
                      className={ cn(className) }
                      color="main">
            <PageContent withPaddings>
                <Title level={ 2 }>Catalog</Title>
                <ProductCatalogWithFilters/>
            </PageContent>
        </ColorContent>
    );
};

export default React.memo(CatalogPageContent);