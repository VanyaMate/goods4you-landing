import React from 'react';
import {
    PhotoItem,
} from '@/entities/content/ui/PhotoWithDescriptionCollage/PhotoWithDescriptionCollage.tsx';
import Image from '@/shared/ui/images/Image/Image.tsx';
import Title from '@/shared/ui/typography/Title/Title';
import Text from '@/shared/ui/typography/Text/Text.tsx';
import { cn } from '@vanyamate/helpers/react/classname';
import css from './PhotoWithDescription.module.scss';


export type PhotoWithDescriptionProps =
    {
        image: PhotoItem;
    }
    & React.ComponentPropsWithoutRef<'div'>;

const PhotoWithDescription: React.FC<PhotoWithDescriptionProps> = (props) => {
    const { image, className, ...other } = props;

    return (
        <article { ...other } className={ cn(className, css.container) } tabIndex={ 0 }>
            <footer className={ css.info }>
                <Title level={ 3 }>{ image.title }</Title>
                <Text>{ image.description }</Text>
            </footer>
            <Image
                alt={ image.title + '. ' + image.description }
                className={ css.image }
                maxSize
                quad
                src={ image.imageUrl }
            />
        </article>
    );
};

export default React.memo(PhotoWithDescription);