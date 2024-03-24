import React, { useState } from 'react';
import {
    useButtonComposeClassName,
} from '@/shared/ui/buttons/Button/hooks/useButtonComposeClassName.ts';


export type ButtonStyleType =
    'primary'
    | 'second'
    | 'light'
    | 'border';

export type ButtonOnClickSync = (event: React.MouseEvent<HTMLButtonElement>, data?: any) => void;
export type ButtonOnClickAsync = (event: React.MouseEvent<HTMLButtonElement>, data?: any) => Promise<void>;

export type ButtonProps =
    {
        onClick?: ButtonOnClickSync;
        onClickAsync?: ButtonOnClickAsync;
        data?: any;
        styleType?: ButtonStyleType;
        quad?: boolean;
    }
    & Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'>;

const Button: React.FC<ButtonProps> = (props) => {
    const {
              onClick,
              onClickAsync,
              data,
              styleType,
              className,
              type,
              quad,
              ...other
          }                         = props;
    const [ loading, setLoading ]   = useState<boolean>(false);
    const composedClassName: string = useButtonComposeClassName(className, styleType, loading, quad);

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
            className={ composedClassName }
            onClick={ onClickHandler }
            // какое классное правило
            type={ type === 'submit' ? 'submit' : type === 'reset' ? 'reset' : 'button' }
            { ...other }
        />
    );
};

export default React.memo(Button);