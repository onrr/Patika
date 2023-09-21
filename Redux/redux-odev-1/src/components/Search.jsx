import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/notes/notesSlice'

function Search() {

  const [searchText, setSearchText] = useState('')

  const dispatch = useDispatch()
  dispatch(search(searchText))

  return (
    <input type="search" placeholder='Search note' value={searchText} onChange={(e) => setSearchText(e.target.value)}
      className='focus:outline-none mb-12 bg-transparent border-b-2 border-cyan-300 px-2 py-1 rounded-lg w-full text-xl text-gray-600'
    />
  )
}

export default Search