import React from 'react';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';
import PageContent from '@/shared/ui/boxes/PageContent/PageContent.tsx';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import DetailsList from '@/shared/ui/details/DetailsList/DetailsList.tsx';


export type FaqPageContentProps =
    {}
    & React.ComponentPropsWithoutRef<'div'>;

const FaqPageContent: React.FC<FaqPageContentProps> = (props) => {
    const {} = props;

    return (
        <ColorContent { ...props } color="main">
            <PageContent withPaddings>
                <Title level={ 2 }>FAQ</Title>
                <DetailsList
                    details={ [
                        {
                            summary : 'Question 1',
                            text    : 'Long answer to the first question',
                            isActive: false,
                        },
                        {
                            summary : 'Question 2',
                            text    : 'Long answer to the second question',
                            isActive: false,
                        },
                        {
                            summary : 'Question 3',
                            text    : 'Long answer to the third question',
                            isActive: false,
                        },
                        {
                            summary : 'Question 4',
                            text    : 'Long answer to the four question',
                            isActive: false,
                        },
                    ] }
                />
            </PageContent>
        </ColorContent>
    );
};

export default React.memo(FaqPageContent);