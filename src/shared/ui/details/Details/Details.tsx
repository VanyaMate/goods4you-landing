import React, { useCallback, useEffect, useRef, useState } from 'react';
import css from './Details.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import DetailsButton
    from '@/shared/ui/details/Details/ui/DetailsButton/DetailsButton.tsx';


export type DetailsItem = {
    summary: React.ReactNode;
    text: React.ReactNode;
    isActive?: boolean;
    onOpenInList?: (cb: () => void) => void;
    onCloseInList?: () => void;
};

export type DetailsProps =
    DetailsItem
    & React.ComponentPropsWithoutRef<'article'>;

const Details: React.FC<DetailsProps> = (props) => {
    const {
              summary, text, className, isActive, onOpenInList, onCloseInList, ...other
          }                     = props;
    const content               = useRef<HTMLDivElement>(null);
    const [ height, setHeight ] = useState<string>('0px');
    // Можно добавить (убрал) оптимизацию с кешированием высоты.

    const getInnerHeight = useCallback(function () {
        if (content.current) {
            return content.current.scrollHeight;
        } else {
            return 0;
        }
    }, []);

    const closeDetails = useCallback(() => {
        if (content.current) {
            const currentHeight = content.current.style.height;
            if (currentHeight !== '0px') {
                onCloseInList?.();
                content.current.style.height = `${ getInnerHeight() }px`;
                setTimeout(() => setHeight(() => '0px'), 0);
            }
        }
    }, [ getInnerHeight, onCloseInList ]);

    const openDetails = useCallback(() => {
        if (content.current) {
            const currentHeight = content.current.style.height;
            if (currentHeight === '0px') {
                onOpenInList?.(closeDetails);
                setHeight(() => `${ getInnerHeight() }px`);
            }
        }
    }, [ closeDetails, getInnerHeight, onOpenInList ]);

    const onTransitionEnd = useCallback(() => {
        if (!content.current) {
            return;
        }

        if (height !== '0px' && height !== 'auto') {
            content.current.style.height = `auto`;
        }
    }, [ height ]);

    const onClickHandler = useCallback(() => {
        if (!content.current) {
            return;
        }
        const opened = height !== '0px';
        if (opened) {
            closeDetails();
        } else {
            openDetails();
        }
    }, [ height, closeDetails, openDetails ]);

    const setDetailsState = useCallback((state: boolean) => {
        if (content.current) {
            const currentHeight = content.current.style.height;
            if (state && currentHeight === '0px') {
                openDetails();
            } else if (!state && currentHeight !== '0px') {
                closeDetails();
            }
        }
    }, [ openDetails, closeDetails ]);

    useEffect(() => {
        setDetailsState(!!isActive);
    }, [ isActive, setDetailsState ]);

    return (
        <article
            { ...other }
            className={ cn(css.container, className) }
        >
            <Title level={ 4 }>
                <DetailsButton isActive={ height !== '0px' } onClick={ onClickHandler }>
                    { summary }
                </DetailsButton>
            </Title>
            <div
                className={ css.content }
                onTransitionEnd={ onTransitionEnd }
                ref={ content }
                style={ { height: height } }
            >
                { text }
            </div>
        </article>
    );
};

export default React.memo(Details);