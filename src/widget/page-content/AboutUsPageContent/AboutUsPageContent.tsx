import React from 'react';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';
import PageContent from '@/shared/ui/boxes/PageContent/PageContent.tsx';
import Title from '@/shared/ui/typography/Title/Title.tsx';


export type AboutUsPageContentProps =
    {}
    & React.ComponentPropsWithoutRef<'div'>;


const AboutUsPageContent: React.FC<AboutUsPageContentProps> = (props) => {
    const {} = props;

    return (
        <ColorContent { ...props } color="mark">
            <PageContent style={ { height: 400 } } withPaddings>
                <Title level={ 2 }>AboutUs</Title>
            </PageContent>
        </ColorContent>
    );
};

export default React.memo(AboutUsPageContent);