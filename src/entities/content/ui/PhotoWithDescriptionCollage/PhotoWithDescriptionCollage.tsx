import React from 'react';
import css from './PhotoWithDescriptionCollage.module.scss';
import PhotoWithDescription
    from '@/entities/content/ui/PhotoWithDescriptionCollage/ui/PhotoWithDescription/PhotoWithDescription.tsx';


export type PhotoItem = {
    imageUrl: string;
    title: string;
    description: string;
}

export type PhotoWithDescriptionCollageProps = {
    items: PhotoItem[];
};

const PhotoWithDescriptionCollage: React.FC<PhotoWithDescriptionCollageProps> = (props) => {
    const { items } = props;

    return (
        <div className={ css.container }>
            {
                items.map((item, index) =>
                    <PhotoWithDescription
                        className={ css.image }
                        image={ item }
                        key={ index }
                    />,
                )
            }
        </div>
    );
};

export default React.memo(PhotoWithDescriptionCollage);