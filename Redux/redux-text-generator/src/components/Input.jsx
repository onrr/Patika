import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { changeModal, changeParas } from '../redux/textSlice'


function Input() {

    const dispatch = useDispatch()
    const paras = useSelector((state) => state.paragraphs.paras)
    const modal = useSelector((state) => state.paragraphs.modal)


    const handleParas = (e) => {
        e.preventDefault();
        dispatch(changeParas(e.target.value))
    }

    const handleModal = (e) => {
        e.preventDefault();
        dispatch(changeModal(e.target.value))
    }


    return (
        <div className='input'>
            <input type='number' min={4} value={paras} onChange={handleParas} />
            <label>Include Html</label>
            <select value={modal} onChange={handleModal} >
                <option value="html">Yes</option>
                <option value="text">No</option>
            </select>
        </div>
    )
}

export default Input