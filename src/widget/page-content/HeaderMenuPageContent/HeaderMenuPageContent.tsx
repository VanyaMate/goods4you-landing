import React from 'react';
import PageContent from '@/shared/ui/boxes/PageContent/PageContent.tsx';
import MenuWithBurger, {
    MenuWithBurgerLinkItem,
} from '@/shared/ui/boxes/MenuWithBurger/MenuWithBurger.tsx';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import Link from '@/shared/ui/links/Link/Link.tsx';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';
import css from './HeaderMenuPageContent.module.scss';


export type HeaderMenuPageContentProps = {
    extra?: React.ReactNode;
    items?: MenuWithBurgerLinkItem[];
};

const HeaderMenuPageContent: React.FC<HeaderMenuPageContentProps> = (props) => {
    const { extra, items } = props;

    return (
        <ColorContent className={ css.container } color="mark">
            <PageContent>
                <MenuWithBurger
                    className={ css.menu }
                    items={ items }
                    siteLogo={
                        <Title level={ 1 }>
                            <Link aria-label="home page" href="/">
                                Goods4you
                            </Link>
                        </Title>
                    }
                />
                {
                    extra
                }
            </PageContent>
        </ColorContent>
    );
};

export default React.memo(HeaderMenuPageContent);