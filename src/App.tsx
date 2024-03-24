import React from 'react';
import HomePage from '@/pages/home/ui/HomePage/HomePage.tsx';


export type AppProps = {};

const App: React.FC<AppProps> = (props) => {
    const {} = props;

    return (
        <HomePage/>
    );
};

export default React.memo(App);