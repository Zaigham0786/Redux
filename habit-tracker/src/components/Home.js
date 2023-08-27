import React, { useState } from 'react';
import "./home.css"
// import cardData from '../data/data';
import { selectItems } from './ItemSlice'
import { useDispatch } from 'react-redux';
import Modal from './Modal';
import { useSelector } from 'react-redux';
import { FaRegEdit } from "react-icons/fa"
import { BsFillTrashFill } from "react-icons/bs"
import { removeItemFromList , editItem} from './ItemSlice';
const Home = () => {
    const [state, setstate] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);
    const cartItems = useSelector(selectItems);
    const dispatch = useDispatch()
    const deleteHandler = (id) => {
        dispatch(removeItemFromList(id))
    }
    const editHandler = (data) => {
        setSelectedItem(data);
        setstate(true)
    }

    const closeModal = () => {
        setSelectedItem(null);
        setstate(false);
    }
    return (
        <div className='mainwrapper'>
            <div className="cardmain">
                <div className="cardbody" onClick={() => setstate(true)} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')` }}>
                    <h2 style={{ color: "grey", borderBottom: "1px solid #5375d9" }}>Create Own</h2>
                </div>
                {cartItems.map((data) => {
                    return (
                        <div key={data.id} className="cardbody" style={{ backgroundImage: `url(${data.img})` }}>
                            <div className="btnmain"> <div className="oper">
                                <button style={{ border: `1px solid ${data.border}` }} onClick={() => editHandler(data)}><FaRegEdit /></button>
                                <button style={{ border: `1px solid ${data.border}` }} onClick={() => deleteHandler(data.id)}><BsFillTrashFill /></button>
                            </div></div>
                            <h2 style={{ color: `${data.color}`, borderBottom: `1px solid ${data.border}` }}>{data.title}</h2>
                        </div>
                    )
                })}
            </div>
            {state && <Modal close={closeModal} editedItem={selectedItem} />}
        </div>
    );
}

export default Home;
