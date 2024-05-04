import React, {memo, useRef, useState} from 'react';

export const MemoPlayground = () => {
    return (
        <div>
            <h2>Memo Playground</h2>
            <ParentComponent>
                <ChildComponent
                    name="Passing as children won't lead to rerendering on parent state change"
                    parentState={-1}
                />
            </ParentComponent>
        </div>
    );
};

const ParentComponent = ({children}) => {
    const [state, setState] = useState(0);

    return (
        <div>
            <div>{new Date().getTime()}</div>
            <button onClick={() => setState(state + 1)}>State is {state}</button>
            <ChildComponent name="Included as a explicit child will be rerendered every time" parentState={state} />
            <MemoizedChild name="Memoized won't rerender at all" parentState={state} />
            {children}
        </div>
    );
};

const ChildComponent = ({name, parentState}) => {
    const ref = useRef(0);
    // They don't recommend mutating ref during rendering cuz it violates pure function rule
    // https://react.dev/reference/react/useRef
    ref.current++;

    return (
        <div>
            <h3>{name}</h3>
            <div>
                Rerender №{ref.current} {new Date().getTime()}
                <br />
                Parent state, excluded from "arePropsEqual", is {parentState}
            </div>
        </div>
    );
};

// comparing only by name to make sure, that we can omit even changing propss
const MemoizedChild = memo(ChildComponent, (prev, curr) => prev.name === curr.name);
