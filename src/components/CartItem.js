import React from 'react'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

function CartItem({ item, removeFromCart }) {
  const [hovered, trackRef] = useHover()
    
  const classNameTrashIcon = hovered ? "fill" : "line"

  return (
    <div className="cart-item">
      <i
        ref={trackRef}
        className={`ri-delete-bin-${classNameTrashIcon}`}
        onClick={() => removeFromCart(item)}
      ></i>
      <img src={item.url} width="130px" />
      <p>$3</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
}

export default CartItem