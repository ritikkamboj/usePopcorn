import React, { useState, useRef } from 'react';

const ExampleComponent = () => {
    // Initializing state
    const [count, setCount] = useState(0);

    // Initializing ref
    const countRef = useRef(0);

    // Function to update state and ref
    const increment = () => {
        // Updating state (immutable)
        setCount(count + 1);

        // Updating ref (mutable)
        countRef.current += 1;
        
        // Log the current values
        console.log("State count:", count);
        console.log("Ref count:", countRef.current);
    };

    return (
        <div>
            <p>State count: {count}</p>
            <p>Ref count: {countRef.current}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default ExampleComponent;
