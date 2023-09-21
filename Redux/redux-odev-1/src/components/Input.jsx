import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addNote } from '../redux/notes/notesSlice';


function Input() {

  const [text, setText] = useState('')
  const [color, setColor] = useState('#333333')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === "") window.alert("please write a note")

    else {
      const noteInfo = {
        text,
        color,
        id: nanoid(4)
      }
      dispatch(addNote(noteInfo))
      setText('')
    }

  }

  return (
    <form className='flex flex-col w-full' onSubmit={handleSubmit}>
      <textarea
        placeholder='Enter your note here...'
        onChange={e => setText(e.target.value)}
        value={text}
        className='focus:outline-none mt-6 mb-2 bg-transparent border-b-2 w-full min-h-[80px]  border-cyan-300 px-2 py-1 rounded-lg text-xl text-gray-600'
      />
      <div id="colors" className='mb-10 px-2 mt-4 flex items-center justify-between' >
        <input type='color' className='w-12 h-12 ' value={color} onChange={(e) => setColor(e.target.value)} />
        <button className='hover:bg-gray-500 hover:text-cyan-300 border-2 rounded-xl border-cyan-300 text-gray-500 px-4 py-2'>Add</button>
      </div>
    </form>
  )
}

export default Input