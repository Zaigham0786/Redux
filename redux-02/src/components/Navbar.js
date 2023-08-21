import React from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi"
import { selectCartItemsCount } from './reducer/CartSlice';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const count = useSelector(selectCartItemsCount);
    return (
        <div className="navbar w-full bg-slate-300 h-16">
            <ul className='flex items-center w-full h-full'>
                <li className='flex items-center justify-center w-1/2'>
                    <h1 className='text-3xl text-red-800'>Store</h1>
                </li>
                <ul className='flex items-center justify-around text-white w-1/2 h-full bg-slate-800 max-sm:hidden '>
                    <li className='w-1/4 h-full flex items-center justify-center'> <Link to='/' className='w-full h-full flex items-center justify-center bg-red-40 hover:bg-white hover:text-slate-900 transition ease-in'>Home</Link></li>
                    <li className='w-1/4 h-full flex items-center justify-center'> <Link to='/about' className='w-full h-full flex items-center justify-center bg-red-40 hover:bg-white hover:text-slate-900 transition ease-in' >About us</Link></li>
                    <li className='w-1/4 h-full flex items-center justify-center'> <Link to='/' className='w-full h-full flex items-center justify-center bg-red-40 hover:bg-white hover:text-slate-900 transition ease-in'>Contact us</Link></li>
                    <li className='w-1/4 h-full flex items-center justify-center'> <Link to='/cart' className='w-full h-full flex items-center justify-center bg-red-40 hover:bg-white hover:text-slate-900 transition ease-in'>Cart ({count})</Link></li>
                 
                   
                </ul>
                <li  className='w-1/2 h-full hidden max-sm:flex items-center   justify-center'>
                        <div className="menu text-3xl ml-10"><GiHamburgerMenu/></div>
                     </li>
            </ul>
        </div>
    );
}

export default Navbar;
