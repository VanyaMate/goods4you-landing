import React from 'react';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import Link from '@/shared/ui/links/Link/Link.tsx';
import Text from '@/shared/ui/typography/Text/Text.tsx';
import SiteMenu from '@/shared/pages/SiteMenu/SiteMenu.tsx';


export type AppProps = {};

const App: React.FC<AppProps> = (props) => {
    const {} = props;

    return (
        <SiteMenu
            items={ [
                <Link href="#catalog" key="catalog">
                    <Text color="main" inline>Catalog</Text>
                </Link>,
                <Link href="#about_us" key="about-us">
                    <Text color="main" inline>About us</Text>
                </Link>,
                <Link href="#product_selection" key="product-selection">
                    <Text color="main" inline>Product selection</Text>
                </Link>,
                <Link href="#our_team" key="out-team">
                    <Text color="main" inline>Out team</Text>
                </Link>,
                <Link href="#FAQ" key="faq">
                    <Text color="main" inline>FAQ</Text>
                </Link>,
                <Link href="#LINK_TO_ADMIN_PANEL" key="for-staff">
                    <Text color="main" inline>For staff</Text>
                </Link>,
            ] }
            siteLogo={
                <Title level={ 1 }>
                    <Link href="/">
                        <Text color="main" inline>Goods4you</Text>
                    </Link>
                </Title>
            }
        />
    );
};

export default React.memo(App);