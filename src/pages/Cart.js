import React, { useContext} from "react"
import { CONTEXT } from '../components/storeContext'
import CartItem from '../components/CartItem'

function Cart() {
    const { cartItems, removeFromCart, placingOrder, buttonText } = useContext(CONTEXT)
    const cartItemElements = cartItems.map(item => (
        <CartItem 
            key={item.id} 
            item={item} 
            removeFromCart={removeFromCart}
        />
    ))

    const totalCost = cartItems.reduce(accumulator => {
        return accumulator + 3
    }, 0)
    
    const placeOrderBtn = cartItems.length > 0 ?  
            <div className="order-button">
                <button onClick={placingOrder}>{buttonText}</button>
            </div> : <div className="order-notice">There is nothing in your cart!</div>

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: $ {totalCost} </p>
            {placeOrderBtn}
        </main>
    )
}

export default Cart