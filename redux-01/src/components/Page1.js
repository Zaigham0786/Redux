import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increament,decreament } from './reducers/counterSlice';
import { Link } from 'react-router-dom';
const Page1 = () => {
    const count  = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <Link to="/page2">page2</Link>
            <Link to="/page3">page3</Link>
            <h1>{count}</h1>
            <button  onClick={()=>dispatch(increament())} >increase</button>
            <button onClick={()=>dispatch(decreament())}>Decrease</button>
        </div>
    );
}

export default Page1;
