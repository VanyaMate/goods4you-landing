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


export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = (props) => {
    const {} = props;

    return (
        <>
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
                items={ [
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
                ] }
            />
            <main>
                <CatalogPageContent id="catalog"/>
                <AboutUsPageContent id="about_us"/>
            </main>
        </>
    );
};

export default React.memo(HomePage);