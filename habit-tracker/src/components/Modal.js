import React, { useState } from 'react';
import "./modal.css"
import { IoMdClose } from "react-icons/io"
import { useDispatch} from 'react-redux';
import { addItemToList } from './ItemSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Modal = (props) => {
    const [url, seturl] = useState()
    const [title, settitle] = useState()
    const [color, setcolor] = useState()
    const [border, setborder] = useState()
    const [desc, setdesc] = useState()
    const dispatch = useDispatch()
    const [updatedImg, setUpdatedImg] = useState(url);
    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedColor,setUpdatedColor] = useState(color);
    const [updatedBorder,setupdatedBorder] = useState(border);
    const [updatedDesc,setupdatedDesc] = useState(desc);

    const submitHandler = (e) => {
        e.preventDefault()
      const Item = {
        title : title,
        img : url,
        color : color,
        border : border,
        desc : desc,
      }
      dispatch(addItemToList(Item))
      props.close(false)
      toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
    return (
        <div className='modalwrapper'>
            <div className="modalmain">
                <button onClick={() => props.close(false)}><IoMdClose /></button>
                <div className="main">
                    <form onSubmit={submitHandler}>
                    <ToastContainer />
                        <table>


                            <tr>
                                <td>

                                    <input required type="text" onChange={(e) => seturl(e.target.value)} placeholder='Enter your imaje url' />
                                </td>
                                <td>
                                    <input required type="text" onChange={(e) => settitle(e.target.value)} placeholder='Enter Card Title' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input required type="text" onChange={(e) => setcolor(e.target.value)} placeholder='Enter text color' />
                                </td>
                                <td>
                                    <input required type="text" onChange={(e) => setborder(e.target.value)} placeholder='Enter border color' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: "92%", height: "100%" }}><textarea required name="" style={{ width: "100%", height: "100%" }} placeholder='Enter Card Description' onChange={(e) => setdesc(e.target.value)} ></textarea></td>
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
