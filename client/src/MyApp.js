import React from 'react';
import {UseEffectPlayground} from './hooks/useEffect';
import {UseReducerPlayground} from './hooks/useReducer';
import {UseRefPlayground} from './hooks/useRef';
import {UseStatePlayground} from './hooks/useState';
import {MemoPlayground} from './api/memo';

export const MyApp = () => {
    return (
        <>
            <UseEffectPlayground />
            <UseReducerPlayground />
            <UseRefPlayground />
            <MemoPlayground />
            <UseStatePlayground />
        </>
    );
};
