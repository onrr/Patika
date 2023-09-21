import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../redux/notes/notesSlice'

function NoteCard({ ...props }) {

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteNote(id))
    }

    return (
        <div className='h-[200px] w-full relative text-gray-50 px-4 py-3 text-xl ' style={{ backgroundColor: props.color }}>
            <div className='flex flex-col'>
                <span className='h-[140px] w-auto break-words overflow-auto'>
                    {props.text}
                </span>
                <button
                    onClick={(id) => handleDelete(props.id)}
                    className='absolute bottom-3 right-3 text-sm'>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default NoteCard