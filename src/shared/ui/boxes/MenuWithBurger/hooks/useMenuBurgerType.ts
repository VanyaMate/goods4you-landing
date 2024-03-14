import React, { useCallback, useEffect, useRef, useState } from 'react';


export type UseMenuBurgerType = {
    container: React.RefObject<HTMLElement>;
    logo: React.RefObject<HTMLDivElement>;
    list: React.RefObject<HTMLUListElement>;
    isBurger: boolean;
    showMenu: boolean;
    burgerOpened: boolean;
    openBurger: () => void;
    closeBurger: () => void;
}

export const useMenuBurgerType = function (): UseMenuBurgerType {
    const container                         = useRef<HTMLElement>(null);
    const logo                              = useRef<HTMLDivElement>(null);
    const list                              = useRef<HTMLUListElement>(null);
    const burger                            = useRef<HTMLElement>(null);
    const previousFocus                     = useRef<HTMLElement | null>(null);
    const updateState                       = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [ isBurger, setIsBurger ]         = useState<boolean>(false);
    const [ showMenu, setShowMenu ]         = useState<boolean>(false);
    const [ burgerOpened, setBurgerOpened ] = useState<boolean>(false);

    const openBurger = useCallback(() => {
        const root = document.querySelector('#root');
        if (root) {
            root.setAttribute('inert', '');
        }
        setBurgerOpened(true);
        previousFocus.current = <HTMLElement>document.activeElement;
        burger.current?.focus();
    }, []);

    const closeBurger = useCallback(() => {
        const root = document.querySelector('#root');
        if (root) {
            root.removeAttribute('inert');
        }
        setBurgerOpened(false);
        previousFocus.current?.focus();
    }, []);

    const isWidthForBurger = useCallback(() => {
        const containerWidth: number = container.current?.scrollWidth ?? 0;
        const logoWidth: number      = logo.current?.scrollWidth ?? 0;
        const listWidth: number      = list.current?.scrollWidth ?? 0;

        const availableSpaceForList: number = containerWidth - logoWidth - 40;
        return availableSpaceForList - listWidth <= 0;
    }, []);

    const initUpdate = useCallback((delay: number) => {
        updateState.current = setTimeout(() => {
            const isBurgerSize: boolean = isWidthForBurger();
            setIsBurger(isBurgerSize);
            setShowMenu(true);

            if (!isBurgerSize) {
                closeBurger();
            }
            updateState.current = null;
        }, delay);
    }, [ closeBurger, isWidthForBurger ]);

    useEffect(() => {
        if (burgerOpened) {
            const escapePressHandler = (event: KeyboardEvent) => {
                if (event.code === 'Escape') {
                    closeBurger();
                }
            };
            window.addEventListener('keydown', escapePressHandler);
            return () => window.removeEventListener('keydown', escapePressHandler);
        }
    }, [ burgerOpened, closeBurger ]);

    useEffect(() => {
        initUpdate(0);

        const onResizeHandler = function () {
            if (!updateState.current) {
                initUpdate(200);
            }
        };

        window.addEventListener('resize', onResizeHandler);
        return () => window.removeEventListener('resize', onResizeHandler);
    }, [ initUpdate ]);

    return {
        container, logo, list, isBurger, showMenu, burgerOpened, openBurger, closeBurger,
    };
};