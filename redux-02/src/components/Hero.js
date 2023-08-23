import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import data from './data/data';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, } from './reducer/CartSlice';
import { selectCartItems } from './reducer/CartSlice';
// tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//
const Hero = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const isItemInCart = (itemId) => {
        return cartItems.some(item => item.id === itemId);
    };
    const handleAddtoCArt = (id, name, url, price, quantity) => {
        if (isItemInCart(id)) {
            toast.warning("Already added!", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return;

        }

        const newitem = { id, name, url, price, quantity };
        dispatch(addItemToCart(newitem));
        toast.success("Successfully Added!", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }




    return (
        <div className='w-full h-screen bg-slate-500'>
            <div className="wrapper  bg-slate-500 w-full h-full max-md:h-auto">
                <Navbar />
                <div className="cardbody border-solid  w-full h-3/4 flex flex-wrap gap-4 mt-10 items-center justify-center ">
                    {data.map((data) => {
                        return (
                            <div key={data.id} className="card transition-all ease-in w-56 overflow-hidden h-80 border shadow-[5px_5px_0px_0px_rgba(109,40,217)] rounded-lg hover:shadow-none cursor-pointer duration-300">
                                <div className="top w-full h-3/5 bg-white overflow-hidden">
                                    <img src={data.url} alt="" className='hover:scale-110 transition-all ease-in duration-300 w-full h-full object-cover ' />
                                </div>
                                <div className="bottom w-full h-2/5 bg-slate-200 flex items-center justify-center flex-col">
                                    <h3 className='text-purple-800 font-bold text-xl w-full h-1/4 flex items-center justify-center'>{data.title}</h3>
                                    <h2 className='text-purple-800 font-bold text-xl w-full h-1/3 flex items-center justify-center'> ₹ {data.price}</h2>

                                    <button onClick={() => handleAddtoCArt(data.id, data.title, data.url, data.price, data.quantity)} className='bg-slate-900 px-3 py-2 border text-sm font-bold rounded-md text-white hover:bg-white hover:text-black hover:border-blue-950 hover:border transition-all ease-in-out duration-500'> ADD TO CART</button>


                                    <ToastContainer />
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}

export default Hero;
