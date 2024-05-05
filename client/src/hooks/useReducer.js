import React, {useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {...state, age: state.age + 1};
        default:
            return state;
    }
}

function initFunction(age) {
    return {age};
}

export const UseReducerPlayground = () => {
    const [state, dispatch] = useReducer(reducer, 42, initFunction);

    const handler = () => dispatch({type: 'increment'});

    return (
        <section>
            <h2>useReducer Playground</h2>
            <div>Age: {state.age}</div>
            <button onClick={handler}>Increment</button>
        </section>
    );
};
