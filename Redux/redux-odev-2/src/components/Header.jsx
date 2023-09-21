import React from 'react'
import { useSelector } from 'react-redux'



function Header() {

  const budget = useSelector((state) => state.products.budget)

  return (
    <>
      <div className="avatar">
        <img src="https://neal.fun/spend/billgates.jpg" alt="Bill Gates" />
        <h1>Spend Bill Gates' Money</h1>
      </div>
      <div className="budget">${budget.toLocaleString()}</div>
    </>
  )
}

export default Header