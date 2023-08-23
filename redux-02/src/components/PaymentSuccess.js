import React from 'react';
import Navbar from './Navbar';
import "@lottiefiles/lottie-player";
import { Link } from 'react-router-dom';
const PaymentSuccess = () => {
    return (
        <div className='w-full h-screen bg-slate-500'>
            <div className="wrapper  bg-slate-500 w-full h-full max-md:h-auto">
                <Navbar />
                <div className="cardbody border-solid  w-full h-3/4 flex flex-wrap gap-4 mt-10 items-center justify-center flex-col ">
                    <div className='w-1/2 h-1/2'>
                        <lottie-player
                            autoplay
                            loop
                            mode="normal"
                            src="https://lottie.host/3d516f5f-0e68-4ded-9ffa-158e640cbfa0/pHmSZ8Ybs9.json"

                        >
                        </lottie-player>
                        <h1 className='w-full text-center text-green-400 font-bold text-2xl'>Payment Success</h1>
                    </div>
                    <Link to='/' className='mt-10 bg-white p-3 rounded-sm font-semibold text-slate-900 border border-green-500 hover:bg-blue-500 transition-all ease-in-out delay-150 hover:text-white'>
                        Back To Home
                    </Link>


                </div>
            </div>
        </div>
    );
}

export default PaymentSuccess;
