
import React, { useState } from 'react';
import { useNavigate, } from "react-router-dom"
import Navbar from './Navbar';
import { incrementQuantity, selectCartItems, totalprice, decreamentQuantity, removeItemFromCart, emptyCart } from './reducer/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillTrashFill } from 'react-icons/bs'
// tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRazorpay from "react-razorpay";
//
const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(totalprice)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [Razorpay] = useRazorpay();
    const deletehandler = (id) => {
        dispatch(removeItemFromCart(id))
        toast.error("Items Removed!", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });

    }
    //id generation
    const displayRazorpay = (params) => {
        if (params < 100) {
            toast.error("Your Cart is Empty!", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
        else {
            const options = {

                key: "rzp_test_K6tKctnWR6rqxy",
                amount: total * 100, // Amount should be in paise
                currency: "INR",
                name: "ReduxStore",
                description: "Test Transaction",
                handler: function (response) {
                    toast.success(`Order id : ${response.razorpay_payment_id}`, {
                        position: toast.POSITION.TOP_CENTER,
                    });
                    navigate('/success')
                    dispatch(emptyCart())
                },
            };
            const rzp1 = new Razorpay(options);
            rzp1.open();
        }

    }
    return (
        <div className='w-full h-screen'>
            <div className="wrapper  bg-slate-500 w-full h-full">
                <Navbar />

                <div className="cardbody border-solid  w-full h-3/4 flex flex-wrap gap-4 items-center justify-center ">
                    <div className=' w-11/12 h-full overflow-auto max-md:flex max-md:flex-wrap  max-md:justify-center'>
                        {cartItems.map((data, index) => {
                            return (
                                <div key={data.id} className='rounded-lg w-full h-32 gap-3 mt-2 flex justify-evenly bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 max-sm:flex-col max-sm:h-auto max-md:p-5 max-sm:w-3/4 max-sm:flex max-sm:items-center max-md:overflow-hidden'>
                                    <div className=' w-32 h-full flex justify-center items-center text-3xl font-bold text-white '>
                                        {index + 1}
                                    </div>
                                    <div className=' w-72 h-full max-md:h-32 bg-black'>
                                        <img src={data.url} alt="" className='w-full h-full object-cover ' />
                                    </div>
                                    <div className=' w-52 h-full flex items-center justify-center  text-white text-xl'>
                                        {data.name}
                                    </div>
                                    <div className=' w-40 h-full flex items-center justify-center gap-2'>
                                        <button className='px-3 py-3 bg-slate-600 text-2xl font-bold rounded-lg text-white border' onClick={() => dispatch(decreamentQuantity(data.id))}>-</button>
                                        <p className='text-3xl px-3  py-2 text-white font-bold'>{data.quantity}</p>
                                        <button className='px-3 py-3 bg-slate-600 text-2xl font-bold rounded-lg text-white border' onClick={() => dispatch(incrementQuantity(data.id))}>+</button>
                                    </div>
                                    <div className=' w-44 h-full flex items-center justify-center  text-white text-xl'>
                                        ₹ {data.price}
                                    </div>

                                    <div className=' w-36 h-full flex items-center justify-center'>
                                        <button className='px-2 py-2 bg-red-500 text-3xl rounded-lg text-white border' onClick={() => deletehandler(data.id)}><BsFillTrashFill /></button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className="footer w-full bg-slate-900 h-1/6 flex" >
                    <h1 className='w-1/2 h-full flex justify-center items-center text-2xl text-white max-md:text-xl'>Total : ₹ {total}</h1>
                    <div className='w-1/2 h-full flex items-center justify-center'>
                        <button className='bg-white p-3 rounded-sm font-semibold text-slate-900 border border-green-500 hover:bg-green-500 transition-all ease-in-out delay-150 hover:text-white max-md:p-1' onClick={() => displayRazorpay(total)}>Proceed To Payment</button>
                    </div>
                </div>

                <ToastContainer />
            </div>

        </div>
    );
}

export default Cart;
