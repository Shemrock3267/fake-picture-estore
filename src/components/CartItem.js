import React from 'react'

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line" onClick={()=>removeFromCart(item)}></i>
      <img src={item.url} width="130px" />
      <p>$3</p>
    </div>
  )
}

export default CartItem