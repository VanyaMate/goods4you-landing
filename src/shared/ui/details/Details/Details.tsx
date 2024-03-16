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
            onCloseInList?.();
            content.current.style.height = `${ getInnerHeight() }px`;
            setTimeout(() => setHeight(() => '0px'), 0);
        }
    }, [ getInnerHeight ]);

    const openDetails = useCallback(() => {
        onOpenInList?.(closeDetails);
        setHeight(() => `${ getInnerHeight() }px`);
    }, [ closeDetails, getInnerHeight, onOpenInList ]);

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
    }, [ height ]);

    const onTransitionEnd = useCallback(() => {
        if (!content.current) {
            return;
        }

        if (height !== '0px' && height !== 'auto') {
            content.current.style.height = `auto`;
        }
    }, [ height ]);

    useEffect(() => {
        if (isActive && height === '0px') {
            onClickHandler();
        } else if (!isActive && height !== '0px') {
            onClickHandler();
        }
    }, [ isActive ]);

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