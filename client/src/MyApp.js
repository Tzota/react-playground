import React from 'react';
import {UseStatePlayground} from './hooks/useState';
import {MemoPlayground} from './api/memo';

export const MyApp = () => {
    return (
        <>
            <MemoPlayground />
            <UseStatePlayground />
        </>
    );
};
