import React, {useRef, useState} from 'react';

export const UseRefPlayground = () => (
    <div>
        <h2>useRef playground</h2>
        <ReferencingHtmlElement />
        <KindaUseState />
        <StateToastWrapper />
        <RefToastWrapper />
    </div>
);

const ReferencingHtmlElement = () => {
    const inputRef = useRef(null);
    const [value, setValue] = useState('');

    const handleButtonClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleInputChange = event => {
        setValue(event.target.value);
    };

    return (
        <section>
            <div>We can use useRef to get access to html js api</div>
            <input ref={inputRef} type="text" value={value} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Focus input</button>
        </section>
    );
};

const KindaUseState = () => {
    let ref = useRef(0);
    const [_, setState] = useState(Date.now());

    function handleClick() {
        ref.current = ref.current + 1;
    }

    return (
        <section>
            <div>We can manipulate some value without rerendering (why should we want to?)</div>
            {ref.current}
            <button onClick={handleClick}>Click me!</button>
            <button onClick={() => setState(Date.now())}>Click me to rerender and see counter value</button>
        </section>
    );
};

const StateToastWrapper = () => {
    const [timerId, setTimerId] = useState(0);
    const [showToast, setShowToast] = useState(false);

    const handler = () => {
        setShowToast(true);
        const newTimerId = setTimeout(() => setShowToast(false), 2e3);
        if (timerId) {
            clearTimeout(timerId);
            console.log(`Timer ${timerId} cleared`);
        }
        setTimerId(newTimerId);
    };

    return (
        <section>
            <h3>
                I store a toast timer in the state and the Toast will rerender on every click, that prolongs the timer
            </h3>
            {showToast && <Toast />}
            <button onClick={handler}>show toast (or prolong it)</button>
        </section>
    );
};

const RefToastWrapper = () => {
    const timerId = useRef(0);
    const [showToast, setShowToast] = useState(false);

    const handler = () => {
        setShowToast(true);
        const newTimerId = setTimeout(() => setShowToast(false), 2e3);
        if (timerId.current) {
            clearTimeout(timerId.current);
            console.log(`Timer ${timerId} cleared`);
        }
        timerId.current = newTimerId;
    };

    return (
        <section>
            <h3>
                I store a toast timer in the ref and the Toast will NOT rerender on every click, that prolongs the timer
            </h3>
            {showToast && <Toast />}
            <button onClick={handler}>show toast (or prolong it)</button>
        </section>
    );
};
const Toast = () => {
    return <div>Hello, I'm a toast, rendered at {Date.now()}!</div>;
};
