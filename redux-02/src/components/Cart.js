import React from 'react';
import Navbar from './Navbar';
import { selectCartItems } from './reducer/CartSlice';
import { useSelector } from 'react-redux';
const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    console.log(cartItems)
    return (
        <div className='w-full h-screen'>
            <div className="wrapper  bg-slate-500 w-full h-full">
                <Navbar />

                <div className="cardbody border-solid  w-full h-3/4 flex flex-wrap gap-4 items-center justify-center">
                    {cartItems.map((data) => {
                        return (
                            <div key={data.id} className="card transition-all ease-in w-56 overflow-hidden h-72 border shadow-[5px_5px_0px_0px_rgba(109,40,217)] rounded-lg hover:shadow-none cursor-pointer">
                                <div className="top w-full h-3/5 bg-white">
                                    <img src={data.url} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className="bottom w-full h-2/5 bg-slate-200 flex items-center justify-center flex-col">
                                    <h3 className='text-purple-800 font-bold text-2xl w-full h-1/2 flex items-center justify-center'>{data.name}</h3>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}

export default Cart;
