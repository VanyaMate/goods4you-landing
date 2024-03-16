import React, { useMemo } from 'react';
import { cn } from '@vanyamate/helpers/react/classname';
import css from './Checkbox.module.scss';
import Text from '@/shared/ui/typography/Text/Text.tsx';


export type CheckboxProps =
    {
        label: string;
    }
    & React.ComponentPropsWithoutRef<'input'>;

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { className, label, ...other } = props;
    const uniqId: string                 = useMemo(() => Math.random().toString(), []);

    return (
        <div className={ css.container }>
            <input className={ cn(className, css.input) } { ...other } id={ uniqId }/>
            {
                label
                ? <label className={ css.label } htmlFor={ uniqId }>
                    <Text color="second" size="medium">{ label }</Text>
                </label>
                : null
            }
        </div>
    );
};

export default React.memo(Checkbox);