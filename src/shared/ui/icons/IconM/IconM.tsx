import React from 'react';
import {
    useIconMComposeClassName,
} from '@/shared/ui/icons/IconM/hooks/useIconMComposeClassName.ts';


export type IconMSize =
    'small'
    | 'medium'
    | 'large';

export type IconMProps =
    {
        size?: IconMSize;
    }
    & React.ComponentPropsWithoutRef<'span'>;

const IconM: React.FC<IconMProps> = (props) => {
    const { className, size, ...other } = props;
    const compositeClassName: string    = useIconMComposeClassName(className, size);

    return (
        <span { ...other } className={ compositeClassName }/>
    );
};

export default React.memo(IconM);