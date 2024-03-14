import React, { useEffect, useRef, useState } from 'react';
import css from './Image.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type ImageProps =
    {
        quad?: boolean;
    }
    & React.ComponentPropsWithoutRef<'img'>;

const Image: React.FC<ImageProps> = (props) => {
    const { quad, className, alt, src, ...other } = props;
    const [ loading, setLoading ]                 = useState<boolean>(true);
    const image                                   = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const imageCache    = image.current;
        const onLoadHandler = function () {
            setLoading(false);
        };

        imageCache?.addEventListener('load', onLoadHandler);
        return () => imageCache?.removeEventListener('load', onLoadHandler);
    }, [ src ]);

    return (
        <span
            className={ cn(css.container, className, quad && css.quad, loading && css.loading) }>
            <img
                { ...other }
                alt={ alt ?? '' }
                className={ css.image }
                ref={ image }
                src={ src }
            />
        </span>
    );
};

export default React.memo(Image);