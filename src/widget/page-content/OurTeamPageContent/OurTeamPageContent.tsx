import React from 'react';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';
import PageContent from '@/shared/ui/boxes/PageContent/PageContent.tsx';
import Title from '@/shared/ui/typography/Title/Title.tsx';


export type OurTeamPageContentProps =
    {}
    & React.ComponentPropsWithoutRef<'div'>;

const OurTeamPageContent: React.FC<OurTeamPageContentProps> = (props) => {
    const {} = props;

    return (
        <ColorContent { ...props } color="mark">
            <PageContent withPaddings>
                <Title level={ 2 }>Our team</Title>
                // Photo collage
            </PageContent>
        </ColorContent>
    );
};

export default React.memo(OurTeamPageContent);