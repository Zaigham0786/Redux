import React from 'react';
import Navbar from './Navbar';
import data from './data/data';
import { useDispatch , useSelector} from 'react-redux';
import { addItemToCart,  } from './reducer/CartSlice';
// tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//
const Hero = () => {
    const dispatch = useDispatch();
    const handleAddtoCArt = (id, name, url) => {

        const newitem = { id, name, url }
        dispatch(addItemToCart(newitem));
        toast.success("Successfully Added!", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }


    return (
        <div className='w-full h-screen'>
            <div className="wrapper  bg-slate-500 w-full h-full">
                <Navbar />
                <div className="cardbody border-solid  w-full h-3/4 flex flex-wrap gap-4 items-center justify-center">
                    {data.map((data) => {
                        return (
                            <div key={data.id} className="card transition-all ease-in w-56 overflow-hidden h-72 border shadow-[5px_5px_0px_0px_rgba(109,40,217)] rounded-lg hover:shadow-none cursor-pointer">
                                <div className="top w-full h-3/5 bg-white">
                                    <img src={data.url} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className="bottom w-full h-2/5 bg-slate-200 flex items-center justify-center flex-col">
                                    <h3 className='text-purple-800 font-bold text-2xl w-full h-1/2 flex items-center justify-center'>{data.title}</h3>
                                    <button onClick={() => handleAddtoCArt(data.id, data.title, data.url)} className='bg-slate-300 px-3 py-2 text-sm font-bold rounded-md text-blue-950'> ADD TO CART</button>
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
