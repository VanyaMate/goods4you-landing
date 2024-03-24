import React from 'react';
import ColorContent from '@/shared/ui/boxes/ColorContent/ColorContent.tsx';
import PageContent from '@/shared/ui/boxes/PageContent/PageContent.tsx';
import Questionnaire from '@/entities/content/ui/Questionnaire/Questionnaire';


export type ProductSelectionPageContentProps =
    {}
    & React.ComponentPropsWithoutRef<'div'>;

const ProductSelectionPageContent: React.FC<ProductSelectionPageContentProps> = (props) => {
    const {} = props;

    return (
        <ColorContent { ...props } color="main">
            <PageContent withPaddings>
                <ColorContent color="light">
                    <Questionnaire
                        description="Answer three questions and we will send you a catalog with the most suitable products for you."
                        questions={ [
                            {
                                question: '1 What type of product are you considering?',
                                answers : [
                                    {
                                        type : 'checkbox',
                                        label: 'answer 1',
                                        value: 'true',
                                    },
                                    {
                                        type : 'checkbox',
                                        label: 'answer 2',
                                        value: 'false',
                                    },
                                    {
                                        type : 'checkbox',
                                        label: 'answer 3',
                                        value: 'false',
                                    },
                                ],
                            },
                            {
                                question: '2 What type of product are you considering?',
                                answers : [
                                    {
                                        type : 'checkbox',
                                        label: 'sneakers',
                                        value: 'false',
                                    },
                                    {
                                        type : 'checkbox',
                                        label: 'laptops',
                                        value: 'false',
                                    },
                                    {
                                        type : 'checkbox',
                                        label: 'smartphones',
                                        value: 'false',
                                    },
                                ],
                            },
                        ] }
                        title="We will select the perfect product for you."
                    />
                </ColorContent>
            </PageContent>
        </ColorContent>
    );
};

export default React.memo(ProductSelectionPageContent);