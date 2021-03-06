import React, { useState, useEffect} from 'react'

const CONTEXT = React.createContext();

function StoreContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [buttonText, setButtonText] = useState('Place Order')

  const URL = 'https://api.thedogapi.com/v1/images/search?limit=40&mime_types=png,jpg';

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

  function removeFromCart({ id }){
    setCartItems(prevItems => prevItems.filter(photo => photo.id !== id))
  }

  function placingOrder(){
      if(cartItems.length < 1){
          alert('Add some photos to cart before placing order!')
      } else {
          setButtonText('Ordering...')
          setTimeout(()=>{
              setButtonText('Order placed')
              setCartItems([])
              setTimeout(()=> setButtonText('Place Order'),5000)
          },3000)
      }
  }

  useEffect(() => {
    async function getImages() {
      const response = await fetch(URL, {
        headers: {
          'x-api-key': '8b01211e-947b-4d18-ab2f-667936de1ff8'
        }
      });
      const data = await response.json();
      setAllPhotos(data);
    }
    getImages();
  },[])

  return (
    <CONTEXT.Provider
      value={{
        allPhotos,
        cartItems,
        buttonText,
        toggleFavorite,
        addImgToCart,
        removeFromCart,
        placingOrder
      }}>
      {children}
    </CONTEXT.Provider>
  )
}

export { StoreContextProvider, CONTEXT}