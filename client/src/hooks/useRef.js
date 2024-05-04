import React, {useRef, useState} from 'react';

export const UseRefPlayground = () => (
    <div>
        <h2>useRef playground</h2>
        <ReferencingHtmlElement />
        <KindaUseState />
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
        <div>
            <div>We can use useRef to get access to html js api</div>
            <input ref={inputRef} type="text" value={value} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Focus input</button>
        </div>
    );
};

const KindaUseState = () => {
    let ref = useRef(0);
    const [_, setState] = useState(Date.now());

    function handleClick() {
        ref.current = ref.current + 1;
    }

    return (
        <div>
            <div>We can manipulate some value without rerendering (why should we want to?)</div>
            {ref.current}
            <button onClick={handleClick}>Click me!</button>
            <button onClick={() => setState(Date.now())}>Click me to rerender and see counter value</button>
        </div>
    );
};
