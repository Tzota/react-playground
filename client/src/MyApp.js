import React from 'react';
import {UseRefPlayground} from './hooks/useRef';
import {UseStatePlayground} from './hooks/useState';
import {MemoPlayground} from './api/memo';

export const MyApp = () => {
    return (
        <>
            <UseRefPlayground />
            <MemoPlayground />
            <UseStatePlayground />
        </>
    );
};
