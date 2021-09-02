import React, { useState, useEffect} from 'react'

const CONTEXT = React.createContext();

function StoreContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])
  const URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

  function toggleFavorite(id) {
    const updatedPhotos = allPhotos.map(photo => {
      if (photo.id === id) {
        return {...photo,isFavorite: !photo.isFavorite}
      }
      return photo;
    })
    setAllPhotos(updatedPhotos)
  }

  function addImgToCart(newItem) {
    setCartItems(prevItem => [...prevItem, newItem])
  }

  console.log(cartItems)

  useEffect(() => {
    async function getImages() {
      const response = await fetch(URL);
      const data = await response.json();
      setAllPhotos(data);
    }
    getImages();
  },[])

  return (
    <CONTEXT.Provider value={{allPhotos, toggleFavorite, addImgToCart, cartItems}}>
      {children}
    </CONTEXT.Provider>
  )
}

export { StoreContextProvider, CONTEXT}