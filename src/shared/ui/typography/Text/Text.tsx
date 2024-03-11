import React from 'react';


export type TextType =
    'main'
    | 'inversion'
    | 'link'
    | 'danger';

export type TextProps =
    {
        inline?: boolean;
        type?: TextType;
    }
    & React.ComponentPropsWithoutRef<'p'>;

const Text: React.FC<TextProps> = (props) => {
    const { inline, ...other } = props;

    return (
        inline ? <span { ...other }/> : <p { ...other }/>
    );
};

export default React.memo(Text);