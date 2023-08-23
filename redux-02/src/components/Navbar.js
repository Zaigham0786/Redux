import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu,GiCrossedSabres} from "react-icons/gi"
import { selectCartItemsCount } from './reducer/CartSlice';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const [state, setstate] = useState(false);
    const count = useSelector(selectCartItemsCount);

    const buttonhandler=()=>{
        setstate(!state)
    }
    return (
        <div className="navbar w-full bg-slate-300 h-16">
            <ul className='flex items-center w-full h-full relative'>
                <li className='flex items-center justify-center w-1/2 max-md:w-1/4'>
                    <Link to="/" className='text-3xl text-red-800 font-bold max-md:text-xl'> Redux </Link>
                </li>
   
                <ul className='flex items-center justify-around text-white w-1/2 h-full bg-slate-800 max-md:w-full max-md:text-sm'>
                    <li className='w-1/4 h-full flex items-center justify-center'> <Link to='/' className='w-full h-full flex items-center justify-center bg-red-40 hover:bg-white hover:text-slate-900 transition ease-in'>Home</Link></li>
                    <li className='w-1/4 h-full flex items-center justify-center'> <Link to='/' className='w-full h-full flex items-center justify-center bg-red-40 hover:bg-white hover:text-slate-900 transition ease-in' >About</Link></li>
                    <li className='w-1/4 h-full flex items-center justify-center'> <Link to='/' className='w-full h-full flex items-center justify-center bg-red-40 hover:bg-white hover:text-slate-900 transition ease-in'>Contact</Link></li>
                    <li className='w-1/4 h-full flex items-center justify-center'> <Link to='/cart' className='w-full h-full flex items-center justify-center bg-red-40 hover:bg-white hover:text-slate-900 transition ease-in'>Cart ({count})</Link></li> </ul> 
            
            </ul>
        </div>
    );
}

export default Navbar;
