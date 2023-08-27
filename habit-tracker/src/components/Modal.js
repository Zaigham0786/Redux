import React, { useState , useEffect } from 'react';
import "./modal.css"
import { IoMdClose } from "react-icons/io"
import { useDispatch , useSelector} from 'react-redux';
import { addItemToList , editItem } from './ItemSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectItems } from './ItemSlice';
const Modal = (props) => {
    const [url, seturl] = useState()
    const [title, settitle] = useState()
    const [color, setcolor] = useState()
    const [border, setborder] = useState()
    const dispatch = useDispatch()
    const cartItems = useSelector(selectItems);
    //
    useEffect(() => {
        if (props.editedItem) {
            const { img, title, color, border } = props.editedItem;
            seturl(img);
            settitle(title);
            setcolor(color);
            setborder(border);
        } else {
            seturl('');
            settitle('');
            setcolor('');
            setborder('');
        }
    }, [props.editedItem]);
    //this is use effect section
    const submitHandler = (e) => {
        e.preventDefault()
        const editedItemData = {
            id: props.editedItem ? props.editedItem.id : null,
            title: title,
            img: url,
            color: color,
            border: border,
        };

        if (props.editedItem) {
            dispatch(editItem(editedItemData)); 
        } else {
            dispatch(addItemToList(editedItemData)); 
        }
        props.close()
    
    }
    return (
        <div className='modalwrapper'>
            <div className="modalmain">
                <button onClick={() => props.close()}><IoMdClose /></button>
                <div className="main">
                    <form onSubmit={submitHandler}>
                        <ToastContainer />
                        <table>


                            <tr>
                                <td>

                                    <input required type="text" value={url} onChange={(e) => seturl(e.target.value)} placeholder='Enter your imaje url' />
                                </td>
                                <td>
                                    <input required type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder='Enter Card Title' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input required type="text" value={color} onChange={(e) => setcolor(e.target.value)} placeholder='Enter text color' />
                                </td>
                                <td>
                                    <input required type="text" value={border} onChange={(e) => setborder(e.target.value)} placeholder='Enter border color' />
                                </td>
                            </tr>
                            <tr>
                                <td className='submitbtn'><input type="submit" /></td>
                            </tr>

                        </table>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Modal;
