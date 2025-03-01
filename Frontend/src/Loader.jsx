import React, { useState } from 'react';
import './Loader.css'; // Make sure to create this CSS file for styling the loader

const Loader = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            // Add your code preview logic here
        }, 20000); // 8 seconds
    };

    return (
        <div>
            <button onClick={handleClick}>See Result</button>
            {loading && <div className="loader"></div>}
        </div>
    );
};

export default Loader;
