import React from 'react';
import { QuestionAnswer } from '@/entities/content/ui/Questionnaire/Questionnaire.tsx';
import Checkbox from '@/shared/ui/inputs/Checkbox/Checkbox.tsx';
import Title from '@/shared/ui/typography/Title/Title.tsx';
import css from './QuestionnaireAnswersBox.module.scss';


export type QuestionnaireAnswersBoxProps = {
    question: string;
    answers: QuestionAnswer[];
};

const QuestionnaireAnswersBox: React.FC<QuestionnaireAnswersBoxProps> = (props) => {
    const { question, answers } = props;

    return (
        <section className={ css.container }>
            <Title level={ 3 }>{ question }</Title>
            <div className={ css.content }>
                {
                    answers.map((answer, index) =>
                        <Checkbox
                            defaultChecked={ answer.value === 'true' }
                            key={ question + '-' + index }
                            label={ answer.label }
                            type="checkbox"
                        />,
                    )
                }
            </div>
        </section>
    );
};

export default React.memo(QuestionnaireAnswersBox);