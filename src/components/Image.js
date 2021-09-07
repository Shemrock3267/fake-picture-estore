import React, { useContext } from 'react'
import { CONTEXT } from './storeContext'
import useHover from '../hooks/useHover';
import PropTypes from 'prop-types'

function Image({ className, img }) {
  const [hovered, trackRef] = useHover();
  const { 
    toggleFavorite, 
    addImgToCart, 
    removeFromCart, 
    cartItems, 
  } = useContext(CONTEXT);
  const { isFavorite } = img;

  function heartIcon() {
    if (isFavorite) { 
      return <i
        className="ri-heart-fill favorite"
        onClick={() => toggleFavorite(img.id)}
      ></i>
    } else if (hovered) {
      return <i
        className="ri-heart-line favorite"
        onClick={() => toggleFavorite(img.id)}
      ></i>
    }
  } 
    
  function cartIcon() {
    const isInCart = cartItems.some(photo => photo.id === img.id);
    if (isInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={()=> removeFromCart(img)}></i>
    } else if (hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addImgToCart(img)}></i>
    }
  }

  return (
    <div
      ref={trackRef}
      className={`${className} image-container`}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool
  }).isRequired
}

export default Image;