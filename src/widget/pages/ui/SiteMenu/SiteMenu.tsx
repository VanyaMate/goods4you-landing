import React, { useCallback, useEffect, useRef, useState } from 'react';
import css from './SiteMenu.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type SiteMenuProps = {
    siteLogo: React.ReactNode;
    items: React.ReactNode[];
};

const SiteMenu: React.FC<SiteMenuProps> = (props) => {
    const { siteLogo, items }       = props;
    const container                 = useRef<HTMLElement>(null);
    const logo                      = useRef<HTMLDivElement>(null);
    const list                      = useRef<HTMLUListElement>(null);
    const updateState               = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [ burger, setBurger ]     = useState<boolean>(false);
    const [ showMenu, setShowMenu ] = useState<boolean>(false);

    const isWidthForBurger = useCallback(() => {
        const containerWidth: number = container.current?.scrollWidth ?? 0;
        const logoWidth: number      = logo.current?.scrollWidth ?? 0;
        const listWidth: number      = list.current?.scrollWidth ?? 0;

        const availableSpaceForList: number = containerWidth - logoWidth - 40;
        const listNotFist: boolean          = availableSpaceForList - listWidth <= 0;

        return listNotFist;
    }, []);

    const initUpdate = useCallback((delay: number) => {
        updateState.current = setTimeout(() => {
            setBurger(isWidthForBurger());
            setShowMenu(true);
            updateState.current = null;
        }, delay);
    }, [ isWidthForBurger ]);

    useEffect(() => {
        initUpdate(0);

        const onResizeHandler = function () {
            if (!updateState.current) {
                initUpdate(200);
            }
        };

        window.addEventListener('resize', onResizeHandler);
        return () => window.removeEventListener('resize', onResizeHandler);
    }, [ initUpdate, items, siteLogo, logo, container, list ]);

    return (
        <nav className={ css.container } ref={ container } role="navigation">
            <div ref={ logo }>
                { siteLogo }
            </div>
            <ul className={ cn(css.list, (burger || !showMenu) && css.hidden) }
                ref={ list }>
                {
                    items.map((item, index) => (
                        <li key={ index }>
                            { item }
                        </li>
                    ))
                }
            </ul>
            {
                (burger && showMenu) ? <button type="button">[-]</button> : null
            }
        </nav>
    );
};

export default React.memo(SiteMenu);