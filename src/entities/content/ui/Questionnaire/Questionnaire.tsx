import React, { useState } from 'react';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import Text from '@/shared/ui/typography/Text/Text.tsx';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import { cn } from '@vanyamate/helpers/react/classname';
import css from './Questionnaier.module.scss';
import Checkbox from '@/shared/ui/inputs/Checkbox/Checkbox.tsx';


export type QuestionAnswerType =
    'checkbox'
    | 'text';

export type QuestionAnswer = {
    type: QuestionAnswerType;
    label: string;
    value: string;
}

export type QuestionItem = {
    question: string;
    answers: QuestionAnswer[];
}

export type QuestionnaireProps =
    {
        title: string;
        description: string;
        questions: QuestionItem[];
    }
    & React.ComponentPropsWithoutRef<'div'>;

const Questionnaire: React.FC<QuestionnaireProps> = (props) => {
    const { title, description, questions, className, ...other } = props;
    const [ questionPage, setQuestionPage ]                      = useState<number>(0);

    return (
        <section { ...other } className={ cn(className, css.container) }>
            <header className={ css.header }>
                <Title level={ 2 }>{ title }</Title>
                <Text className={ css.description }
                      color="second"
                      size="medium">{ description }</Text>
            </header>
            <section className={ css.content }>
                <Title level={ 3 }>{ questions[questionPage].question }</Title>
                <div>
                    {
                        questions[questionPage].answers.map((answer, index) =>
                            <Checkbox
                                defaultChecked={ answer.value === 'true' ? true : false }
                                key={ questionPage + '-' + index }
                                label={ answer.label }
                                type="checkbox"
                            />,
                        )
                    }
                </div>
            </section>
            <footer className={ css.footer }>
                <Text className={ css.page } color="second" size="medium">
                    { questionPage + 1 } of { questions.length }
                </Text>
                {
                    (questionPage + 1) === questions.length
                    ? <Button
                        className={ css.button }
                        key="finish"
                        onClick={ () => console.log('finish') }
                        styleType="primary"
                    >
                        <Text inline size="medium">Finish</Text>
                    </Button>
                    :
                    <Button
                        className={ css.button }
                        key="next"
                        onClick={ () => setQuestionPage((prev) => prev + 1) }
                        styleType="border"
                    >
                        <Text inline size="medium">Next step</Text>
                    </Button>
                }
            </footer>
        </section>
    );
};

export default React.memo(Questionnaire);