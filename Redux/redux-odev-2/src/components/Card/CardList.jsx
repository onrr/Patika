import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

function CardList() {

  const data = useSelector((state) => state.products.items)

  return (
    <div className='cardList'>
      {
        data.map(item => (
          <Card key={item.id} items={item} />
        ))
      }
    </div>
  )
}

export default CardList