import React from 'react';
import { createPortal } from 'react-dom';
import css from './BurgerMenu.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';
import {
    MenuWithBurgerLinkItem,
} from '@/shared/ui/boxes/MenuWithBurger/MenuWithBurger.tsx';
import Link from '@/shared/ui/links/Link/Link.tsx';
import Text from '@/shared/ui/typography/Text/Text.tsx';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import IconM from '@/shared/ui/icons/IconM/IconM.tsx';


export type BurgerMenuProps = {
    items?: MenuWithBurgerLinkItem[];
    extra?: React.ReactNode;
    hidden: boolean;
    closeBurger: () => void;
};

const BurgerMenu: React.FC<BurgerMenuProps> = (props) => {
    const { items, hidden, extra, closeBurger } = props;

    return createPortal(
        <nav className={ cn(css.container, hidden && css.hidden) }>
            <Button
                aria-label="close menu"
                className={ css.closeButton }
                onClick={ closeBurger }
                quad
                styleType="light"
                type="button"
            >
                <IconM size="large">close</IconM>
            </Button>
            <div className={ css.content }>
                <ul className={ css.list }>
                    {
                        items ? items.map((item, index) => (
                            <li key={ index }>
                                <Text inline size="large">
                                    <Link href={ item.href }
                                          onClick={ closeBurger }>
                                        { item.text }
                                    </Link>
                                </Text>
                            </li>
                        )) : null
                    }
                </ul>
                {
                    extra ?
                    <>
                        <hr/>
                        { extra }
                    </> : null
                }
            </div>
        </nav>,
        document.body,
    );
};

export default React.memo(BurgerMenu);