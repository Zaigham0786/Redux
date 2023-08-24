import React from 'react';
import "./home.css"
import cardData from '../data/data';
const Home = () => {
    return (
        <div className='mainwrapper'>
            <div className="cardmain">
                {cardData.map((data)=>{return(
                <div className="cardbody" style={{backgroundImage: `url(${data.img})`}}>
                    <h2 style={{color : `${data.color}`,borderBottom: `1px solid ${data.border}`}}>{data.title}</h2>
                </div>
                )})}
            </div>
        </div>
    );
}

export default Home;
