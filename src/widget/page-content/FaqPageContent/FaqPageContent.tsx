import React from 'react';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';
import PageContent from '@/shared/ui/boxes/PageContent/PageContent.tsx';


export type FaqPageContentProps =
    {}
    & React.ComponentPropsWithoutRef<'div'>;

const FaqPageContent: React.FC<FaqPageContentProps> = (props) => {
    const {} = props;

    return (
        <ColorContent { ...props } color="main">
            <PageContent withPaddings>
                // FAQ
            </PageContent>
        </ColorContent>
    );
};

export default React.memo(FaqPageContent);