import React from 'react';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';
import PageContent from '@/shared/ui/boxes/PageContent/PageContent.tsx';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import { cn } from '@vanyamate/helpers/react/classname';
import ProductCard from '@/entities/product/ProductCard/ProductCard.tsx';


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
                <div style={ {
                    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20,
                } }>
                    <ProductCard
                        product={ {
                            id      : '1',
                            imageUrl: 'https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg',
                            imageAlt: '',
                            title   : 'Nike Air Force 1 \'07 QS',
                            price   : 110,
                        } }
                    />
                    <ProductCard product={ {
                        id      : '2',
                        imageUrl: 'https://static.vecteezy.com/ti/fotos-kostenlos/p2/23824645-schon-berg-landschaft-mit-see-und-betrachtung-im-wasser-ai-generiert-kostenlos-foto.jpg',
                        imageAlt: '',
                        title   : 'Nike Air Force 1 \'07 QS',
                        price   : 110,
                    } }/>
                    <ProductCard product={ {
                        id      : '3',
                        imageUrl: 'https://sun9-53.userapi.com/impg/uSSB5RP7UuXOpS2xQMAF6fiEaF7T7Z95z7oZBw/cUguIfSQ8C8.jpg?size=280x293&quality=96&sign=fc03692d6bbfdfc84f2301f819c55a5c&type=album',
                        imageAlt: '',
                        title   : 'Nike Air Force 1 \'07 QS',
                        price   : 110,
                    } }/>
                    <ProductCard product={ {
                        id      : '4',
                        imageUrl: 'https://sun9-53.userapi.com/impg/uSSB5RP7UuXOpS2xQMAF6fiEaF7T7Z95z7oZBw/cUguIfSQ8C8.jpg?size=280x293&quality=96&sign=fc03692d6bbfdfc84f2301f819c55a5c&type=album',
                        imageAlt: '',
                        title   : 'Nike Air Force 1 \'07 QS',
                        price   : 110,
                    } }/>
                    <ProductCard product={ {
                        id      : '5',
                        imageUrl: 'https://sun9-53.userapi.com/impg/uSSB5RP7UuXOpS2xQMAF6fiEaF7T7Z95z7oZBw/cUguIfSQ8C8.jpg?size=280x293&quality=96&sign=fc03692d6bbfdfc84f2301f819c55a5c&type=album',
                        imageAlt: '',
                        title   : 'Nike Air Force 1 \'07 QS',
                        price   : 110,
                    } }/>
                    <ProductCard product={ {
                        id      : '6',
                        imageUrl: 'https://sun9-53.userapi.com/impg/uSSB5RP7UuXOpS2xQMAF6fiEaF7T7Z95z7oZBw/cUguIfSQ8C8.jpg?size=280x293&quality=96&sign=fc03692d6bbfdfc84f2301f819c55a5c&type=album',
                        imageAlt: '',
                        title   : 'Nike Air Force 1 \'07 QS',
                        price   : 110,
                    } }/>
                    <ProductCard product={ {
                        id      : '7',
                        imageUrl: 'https://sun9-53.userapi.com/impg/uSSB5RP7UuXOpS2xQMAF6fiEaF7T7Z95z7oZBw/cUguIfSQ8C8.jpg?size=280x293&quality=96&sign=fc03692d6bbfdfc84f2301f819c55a5c&type=album',
                        imageAlt: '',
                        title   : 'Nike Air Force 1 \'07 QS',
                        price   : 110,
                    } }/>
                </div>
            </PageContent>
        </ColorContent>
    );
};

export default React.memo(CatalogPageContent);