import React, { useState } from 'react';
import { cn } from '@vanyamate/helpers/react/classname';
import css from './Button.module.scss';


export type ButtonStyleType =
    'main'
    | 'second'
    | 'light'
    | 'danger';

export type ButtonOnClickSync = (event: React.MouseEvent<HTMLButtonElement>, data?: any) => void;
export type ButtonOnClickAsync = (event: React.MouseEvent<HTMLButtonElement>, data?: any) => Promise<void>;

export type ButtonProps =
    {
        onClick?: ButtonOnClickSync;
        onClickAsync?: ButtonOnClickAsync;
        data?: any;
        styleType?: ButtonStyleType;
    }
    & Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'>;

const Button: React.FC<ButtonProps> = (props) => {
    const { onClick, onClickAsync, data, styleType, className, type, ...other } = props;
    const [ loading, setLoading ]                                               = useState<boolean>(false);

    const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = function (event) {
        if (onClick) {
            onClick(event, data);
        } else if (onClickAsync) {
            setLoading(true);
            onClickAsync(event, data).finally(() => setLoading(false));
        }
    };

    return (
        <button
            className={
                cn(
                    className,
                    css.container,
                    (styleType === undefined || styleType === 'main') && css.main,
                    styleType === 'second' && css.second,
                    styleType === 'light' && css.light,
                    styleType === 'danger' && css.danger,
                    loading && css.loading,
                )
            }
            onClick={ onClickHandler }
            // какое классное правило
            type={ type === 'submit' ? 'submit' : type === 'reset' ? 'reset' : 'button' }
            { ...other }
        />
    );
};

export default React.memo(Button);