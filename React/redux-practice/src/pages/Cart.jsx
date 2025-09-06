import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cartItems = useSelector((state)=>state.cartItems)
//   console.log("useselcector",cartItems)    
//   total price
  const totalPrice = cartItems.reduce((accum, item)=> accum = accum + (item.price* item.quantity), 0)
   // Format the total price to 2 decimal places
  const formattedTotalPrice = totalPrice.toFixed(2)

  return (

    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(({ productId, title, rating, price, imageUrl, quantity }) => (
          <CartItem
            key={productId}
            productId={productId}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${formattedTotalPrice}</div>
        </div>
      </div>
    </div>
  )
}