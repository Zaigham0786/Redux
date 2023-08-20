import React from 'react';
import { Link } from 'react-router-dom';
const Page3 = () => {
    return (
        <div>
            <Link to="/">page1</Link>
            <Link to="/page2">page2</Link>
            this is page 3
        </div>
    );
}

export default Page3;
