
import { useSelector } from 'react-redux'
import NoteCard from './NoteCard'

function NoteList() {

  const { items, filterItems } = useSelector((state) => state.notes)


  return (
    <>
      <div className='grid grid-cols-2 gap-8 mt-8'>
        { filterItems.length === 0  &&
          items.map((item) => (
            <NoteCard key={item.id} text={item.text} color={item.color} id={item.id} />
          ))
        }
        {
          filterItems.length > 0 &&
          filterItems.map((item) => (
            <NoteCard key={item.id} text={item.text} color={item.color} id={item.id} />
          ))
        }
      </div >
      {
        items.length === 0 && filterItems.length === 0  &&
        <div className='mt-10 h-20 w-full bg-red-500 text-gray-50 text-3xl rounded-2xl grid place-items-center'> there are no notes saved </div>
      }
    </>
  )
}

export default NoteList