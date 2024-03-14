import React from 'react';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import Link from '@/shared/ui/links/Link/Link.tsx';
import MenuWithBurger from '@/shared/ui/boxes/MenuWithBurger/MenuWithBurger.tsx';
import PageContent from '@/shared/ui/boxes/PageContent/PageContent.tsx';
import BannerWithDescription
    from '@/entities/content/ui/BannerWithDescription/BannerWithDescription.tsx';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';


export type AppProps = {};

const App: React.FC<AppProps> = (props) => {
    const {} = props;

    return (
        <ColorContent color="mark">
            <PageContent>
                <MenuWithBurger
                    items={ [
                        {
                            text: 'Link 1',
                            href: '#',
                        },
                        {
                            text: 'Link 2',
                            href: '#',
                        },
                        {
                            text: 'Link 3',
                            href: '#',
                        },
                        {
                            text: 'Link 4',
                            href: '#',
                        },
                        {
                            text: 'Link 5',
                            href: '#',
                        },
                        {
                            text: 'Link 6',
                            href: '#',
                        },
                        {
                            text: 'Link 7',
                            href: '#',
                        },
                    ] }
                    siteLogo={
                        <Title level={ 1 }>
                            <Link aria-label="home page" href="/">
                                Goods4you
                            </Link>
                        </Title>
                    }
                />
                <BannerWithDescription
                    description="We sell smartphones, laptops, clothes, shoes and many other products at low prices"
                    extra={
                        <>
                            <Button
                                styleType="primary"
                                type="button"
                            >
                                Go to shopping
                            </Button>
                            <Button
                                styleType="second"
                                type="button"
                            >
                                Go to shopping
                            </Button>
                            <Button
                                styleType="light"
                                type="button"
                            >
                                Go to shopping
                            </Button>
                            <Button
                                styleType="border"
                                type="button"
                            >
                                Go to shopping
                            </Button>
                        </>
                    }
                    title="Any products from famous brands with worldwide delivery"
                />
            </PageContent>
        </ColorContent>
    );
};

export default React.memo(App);