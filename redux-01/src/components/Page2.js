import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Page2 = () => {
    const count = useSelector((state)=>state.counter.count)
    return (
        <div>
                   <Link to="/">page1</Link>
            <Link to="/page3">page3</Link>
            <br />
            <h1>{count}</h1>
        </div>
    );
}

export default Page2;
