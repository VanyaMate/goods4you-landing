import React from 'react';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';
import PageContent from '@/shared/ui/boxes/PageContent/PageContent.tsx';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import PhotoWithDescriptionCollage
    from '@/entities/content/ui/PhotoWithDescriptionCollage/PhotoWithDescriptionCollage';
import css from './OutTeamPageContent.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type OurTeamPageContentProps =
    {}
    & React.ComponentPropsWithoutRef<'div'>;

const OurTeamPageContent: React.FC<OurTeamPageContentProps> = (props) => {
    const { className, ...other } = props;

    return (
        <ColorContent
            { ...other }
            className={ cn(css.container, className) }
            color="mark"
        >
            <PageContent withPaddings className={ css.content }>
                <Title level={ 2 }>Our team</Title>
                <PhotoWithDescriptionCollage
                    items={ [
                        {
                            imageUrl   : 'https://sun9-53.userapi.com/impg/uSSB5RP7UuXOpS2xQMAF6fiEaF7T7Z95z7oZBw/cUguIfSQ8C8.jpg?size=280x293&quality=96&sign=fc03692d6bbfdfc84f2301f819c55a5c&type=album',
                            title      : 'Nike',
                            description: 'Krosovok',
                        },
                        {
                            imageUrl   : 'https://sun9-53.userapi.com/impg/uSSB5RP7UuXOpS2xQMAF6fiEaF7T7Z95z7oZBw/cUguIfSQ8C8.jpg?size=280x293&quality=96&sign=fc03692d6bbfdfc84f2301f819c55a5c&type=album',
                            title      : 'Nike',
                            description: 'Krosovok',
                        },
                        {
                            imageUrl   : 'https://sun9-53.userapi.com/impg/uSSB5RP7UuXOpS2xQMAF6fiEaF7T7Z95z7oZBw/cUguIfSQ8C8.jpg?size=280x293&quality=96&sign=fc03692d6bbfdfc84f2301f819c55a5c&type=album',
                            title      : 'Nike',
                            description: 'Krosovok',
                        },
                        {
                            imageUrl   : 'https://sun9-53.userapi.com/impg/uSSB5RP7UuXOpS2xQMAF6fiEaF7T7Z95z7oZBw/cUguIfSQ8C8.jpg?size=280x293&quality=96&sign=fc03692d6bbfdfc84f2301f819c55a5c&type=album',
                            title      : 'Nike',
                            description: 'Krosovok',
                        },
                        {
                            imageUrl   : 'https://sun9-53.userapi.com/impg/uSSB5RP7UuXOpS2xQMAF6fiEaF7T7Z95z7oZBw/cUguIfSQ8C8.jpg?size=280x293&quality=96&sign=fc03692d6bbfdfc84f2301f819c55a5c&type=album',
                            title      : 'Nike',
                            description: 'Krosovok',
                        },
                        {
                            imageUrl   : 'https://sun9-53.userapi.com/impg/uSSB5RP7UuXOpS2xQMAF6fiEaF7T7Z95z7oZBw/cUguIfSQ8C8.jpg?size=280x293&quality=96&sign=fc03692d6bbfdfc84f2301f819c55a5c&type=album',
                            title      : 'Nike',
                            description: 'Krosovok',
                        },
                    ] }
                />
            </PageContent>
        </ColorContent>
    );
};

export default React.memo(OurTeamPageContent);