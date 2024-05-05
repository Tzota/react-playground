import React from 'react';
import {UseReducerPlayground} from './hooks/useReducer';
import {UseRefPlayground} from './hooks/useRef';
import {UseStatePlayground} from './hooks/useState';
import {MemoPlayground} from './api/memo';

export const MyApp = () => {
    return (
        <>
            <UseReducerPlayground />
            <UseRefPlayground />
            <MemoPlayground />
            <UseStatePlayground />
        </>
    );
};
