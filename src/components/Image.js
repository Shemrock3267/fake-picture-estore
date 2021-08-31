import React, { useState, useContext } from 'react'
import { CONTEXT } from './storeContext'
import PropTypes from 'prop-types'

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(CONTEXT);
  const { isFavorite } = img;

  const heartIcon = (isFavorite &&
    <i
      className="ri-heart-fill favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>)
    ||
    (hovered &&
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>)
  
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} image-container`}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon}
      {cartIcon}
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