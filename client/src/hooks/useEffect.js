import React, {useEffect, useState, memo, useRef} from 'react';

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
            <label>
                <span>Show children</span>
                <input type="checkbox" checked={mountChild} onChange={() => setMountChild(!mountChild)} />
            </label>
            {mountChild && <MemoizedJustLogging state={counter} />}
            {mountChild && <WindowEvents />}
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

const WindowEvents = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const ref = useRef(null);

    useEffect(() => {
        function handleMove(e) {
            var rect = ref.current.getBoundingClientRect();
            console.log(rect.top, rect.right, rect.bottom, rect.left);

            setPosition({
                x: Math.max(Math.min(e.clientX, rect.right), rect.left),
                y: Math.max(Math.min(e.clientY, rect.bottom), rect.top),
            });
        }

        window.addEventListener('pointermove', handleMove);

        return () => {
            window.removeEventListener('pointermove', handleMove);
        };
    }, []);

    return (
        <div style={{border: 'solid 1px gray', width: '100px', height: '100px'}} ref={ref}>
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: 'pink',
                    borderRadius: '50%',
                    opacity: 0.6,
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    pointerEvents: 'none',
                    left: -10,
                    top: -10,
                    width: 20,
                    height: 20,
                }}
            />
        </div>
    );
};
