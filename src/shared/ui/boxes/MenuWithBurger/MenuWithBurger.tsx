import React from 'react';
import css from './MenuWithBurger.module.scss';
import { cn } from '@vanyamate/helpers';
import {
    useMenuBurgerType,
} from '@/shared/ui/boxes/MenuWithBurger/hooks/useMenuBurgerType.ts';
import BurgerMenu from '@/shared/ui/boxes/BurgerMenu/BurgerMenu.tsx';
import Link from '@/shared/ui/links/Link/Link.tsx';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import Text from '@/shared/ui/typography/Text/Text.tsx';


export type MenuWithBurgerLinkItem = {
    text: string;
    href: string;
}

export type MenuWithBurgerProps = {
    siteLogo: React.ReactNode;
    items?: MenuWithBurgerLinkItem[];
    extra?: React.ReactNode;
};

const MenuWithBurger: React.FC<MenuWithBurgerProps> = (props) => {
    const { siteLogo, items, extra } = props;
    const {
              container,
              isBurger,
              list,
              showMenu,
              logo,
              burgerOpened,
              closeBurger,
              openBurger,
          }                          = useMenuBurgerType();

    return (
        <nav className={ css.container } ref={ container } role="navigation">
            <div ref={ logo }>
                { siteLogo }
            </div>
            <ul className={ cn(css.list, (isBurger || !showMenu) && css.hidden) }
                ref={ list }>
                {
                    items ? items.map((item, index) => (
                        <li key={ index }>
                            <Link href={ item.href }>{ item.text }</Link>
                        </li>
                    )) : null
                }
                {
                    extra ? <li>{ extra }</li> : null
                }
            </ul>
            {
                (isBurger && showMenu) ? <>
                    <BurgerMenu
                        closeBurger={ closeBurger }
                        extra={ extra }
                        hidden={ !burgerOpened }
                        items={ items }
                    />
                    <Button
                        aria-label="open navigation menu"
                        onClick={ openBurger }
                        quad
                        type="button"
                    >
                        <Text size="large">=</Text>
                    </Button>
                </> : null
            }
        </nav>
    );
};

export default React.memo(MenuWithBurger);