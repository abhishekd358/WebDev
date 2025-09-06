import { useDispatch, useSelector } from "react-redux"
import { removeWishListItem } from "../Store/Reducer/wishlistReducer"

export default function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlistItems)
  const dispatch = useDispatch()

  return (
    <div className="cart-container">
      <h2>Wishlist</h2>
      <div className="cart-items-container">
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty</p>
        ) : (
          <>
            <div className="cart-header cart-item-container">
              <div className="cart-item">Item</div>
              <div className="item-price" style={{marginRight:"60px"}}>Price</div>
            </div>
            {wishlistItems.map((product) => (
              <div className="cart-item-container" key={product.productId}>
                <div className="cart-item">
                  <img src={product.imageUrl} alt={product.title} width="60" />
                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.rating} ★ ★ ★ ★</p>
                  </div>
                </div>
                <div className="item-price">${product.price}</div>
                <div className="cta-container"><button onClick={()=>dispatch(removeWishListItem(product.productId))}>Remove</button></div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}