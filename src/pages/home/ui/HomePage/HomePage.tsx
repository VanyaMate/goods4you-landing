import React from 'react';
import BannerWithDescription
    from '@/entities/content/ui/BannerWithDescription/BannerWithDescription.tsx';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import Text from '@/shared/ui/typography/Text/Text.tsx';
import HeaderMenuPageContent
    from '@/widget/page-content/HeaderMenuPageContent/HeaderMenuPageContent.tsx';
import CatalogPageContent
    from '@/widget/page-content/CatalogPageContent/CatalogPageContent.tsx';
import AboutUsPageContent
    from '@/widget/page-content/AboutUsPageContent/AboutUsPageContent.tsx';
import MenuWithBurger from '@/shared/ui/boxes/MenuWithBurger/MenuWithBurger.tsx';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import Link from '@/shared/ui/links/Link/Link.tsx';
import ProductSelectionPageContent
    from '@/widget/page-content/ProductSelectionPageContent/ProductSelectionPageContent.tsx';
import OurTeamPageContent
    from '@/widget/page-content/OurTeamPageContent/OurTeamPageContent.tsx';
import FaqPageContent from '@/widget/page-content/FaqPageContent/FaqPageContent.tsx';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';
import PageContent from '@/shared/ui/boxes/PageContent/PageContent.tsx';


export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = (props) => {
    const {}    = props;
    const items = [
        {
            text: 'Catalog',
            href: '#catalog',
        },
        {
            text: 'About us',
            href: '#about_us',
        },
        {
            text: 'Product selection',
            href: '#product_selection',
        },
        {
            text: 'Our team',
            href: '#our_team',
        },
        {
            text: 'FAQ',
            href: '#faq',
        },
        {
            text: 'For staff',
            href: '#TODO:LINK_TO_ADMIN_PAGE',
        },
    ];

    return (
        <>
            <header>
                <HeaderMenuPageContent
                    extra={
                        <BannerWithDescription
                            description="We sell smartphones, laptops, clothes, shoes and many other products at low prices"
                            extra={
                                <Button
                                    styleType="primary"
                                    type="button"
                                >
                                    <Text inline size="medium">Go to shopping</Text>
                                </Button>
                            }
                            title="Any products from famous brands with worldwide delivery"
                        />
                    }
                    items={ items }
                />
            </header>
            <main>
                <CatalogPageContent id="catalog"/>
                <AboutUsPageContent id="about_us"/>
                <ProductSelectionPageContent id="product_selection"/>
                <OurTeamPageContent id="our_team"/>
                <FaqPageContent id="faq"/>
            </main>
            <footer>
                <ColorContent color="second">
                    <PageContent>
                        <MenuWithBurger
                            items={ items }
                            siteLogo={
                                <Title level={ 1 }>
                                    <Link aria-label="home page" aria-level={ 1 }
                                          href="/">
                                        Goods4you
                                    </Link>
                                </Title>
                            }
                        />
                    </PageContent>
                </ColorContent>
            </footer>
        </>
    );
};

export default React.memo(HomePage);