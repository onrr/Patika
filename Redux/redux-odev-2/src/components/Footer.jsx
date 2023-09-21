import React from 'react'
import { useSelector } from "react-redux";

function Footer() {

  const items = useSelector(state => state.products.items)
  const money = useSelector(state => state.products)
  const filtered = items.filter((item) => item.count > 0);

  return (
    <div className='footer'>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Count</th>
          <th>Product Total</th>
        </tr>
        {
          filtered.map((item) => (
            <tr key={item.id}>
              <td>{item.productName}</td>
              <td>{Number(item.productPrice).toLocaleString()}</td>
              <td>{item.count}</td>
              <td>{(item.count * item.productPrice).toLocaleString()}</td>
            </tr>
          ))
        }
      </table>
      {
        filtered.length > 0 &&
        <div className="total">
          <span>Total Amount: </span>
          <span>${(money.current - money.budget).toLocaleString()}</span>
        </div>
      }
    </div>
  )
}

export default Footer