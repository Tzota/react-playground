import React, {useEffect, useState, memo} from 'react';

export const UseEffectPlayground = () => {
    const [counter, setCounter] = useState(0);
    const [anotherCounter, setAnotherCounter] = useState(0);
    const [mountChild, setMountChild] = useState(true);

    return (
        <section>
            <h2>useEffect Playground</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            {anotherCounter}
            <button onClick={() => setAnotherCounter(anotherCounter + 1)}>
                Increment that should not change the child
            </button>
            <input type="checkbox" checked={mountChild} onChange={() => setMountChild(!mountChild)} />
            {mountChild && <MemoizedJustLogging state={counter} />}
        </section>
    );
};

const JustLogging = ({state}) => {
    useEffect(() => {
        console.log('ChildComponent every');

        return () => console.log('ChildComponent every cleanup');
    });

    useEffect(() => {
        console.log('ChildComponent deps');

        return () => {
            console.log('ChildComponent deps cleanup');
        };
    }, [state]);

    useEffect(() => {
        console.log('ChildComponent once');

        return () => console.log('ChildComponent once cleanup');
    }, []);

    return <div>Child: {state}</div>;
};

const MemoizedJustLogging = memo(JustLogging);
