import React, {useState} from 'react';

const stateInitializer = () => {
    console.log('stateInitializer');
    return 0;
};

export const UseStatePlayground = () => {
    const [version, setVersion] = useState(0);

    return (
        <div>
            <h2>UseState Playground</h2>
            <div>Last rerender: {new Date().getTime()}</div>
            <button onClick={() => setVersion(version + 1)}>Change parent state</button>;
            <h3>
                Gonna reinitialize state{' '}
                <a href="https://react.dev/reference/react/useState#resetting-state-with-a-key">because of key</a>
            </h3>
            <Inner key={version} version={version} />
            <h3>No state change on parent change</h3>
            <Inner version={version} />
        </div>
    );
};

const Inner = ({version}) => {
    const [state, setState] = useState(stateInitializer);

    const tripleHandler = () => {
        setState(o => o + 1);
        setState(o => o + 1);
        setState(o => o + 1);
    };

    return (
        <div>
            <div>Last rerender: {new Date().getTime()}</div>
            <div>
                {state} (version {version})
            </div>
            <button onClick={() => setState(state + 1)}>+1</button>
            <button onClick={tripleHandler}>+3</button>
        </div>
    );
};
