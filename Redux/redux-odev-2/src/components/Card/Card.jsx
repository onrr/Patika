
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { basket } from "../../redux/productSlice";

function Card({ items }) {

  const [count, setCount] = useState(0)

  const budget = useSelector((state) => state.products.budget);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(basket({ id: items.id, count: count }));
  }, [dispatch, count, items.id]);

  const handleBuy = () => {
    setCount((c) => c + 1)
  }
  const handleSell = () => {
    setCount((c) => c - 1)
  }

  return (
    <div className='card'>
      <img src={items.image}></img>
      <span className="productName">{items.productName}</span>
      <span className="productPrice">${Number(items.productPrice).toLocaleString()}</span>
      <div className="buttons">
        <button
        style={count !== 0 ? {backgroundColor: '#D70040'} : {backgroundColor: 'transparent', color: '#D70040'}}
          disabled={count == 0 ? true : false}
          onClick={handleSell}
          type='button' >Sell</button>
        <span className="piece">{count}</span>
        <button
        style={budget < items.productPrice ? {backgroundColor: 'transparent', color: '#D70040'} : {backgroundColor: '#24c486'}}
          disabled={items.productPrice > budget ? true : false}
          onClick={handleBuy}
          type='button'>Buy</button>
      </div>
    </div>
  )
}

export default Card