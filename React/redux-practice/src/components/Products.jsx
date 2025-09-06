import { useDispatch, useSelector } from "react-redux"
import { addCartItem } from "../Store/Reducer/cartReducer"
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { addWishListItem, removeWishListItem } from "../Store/Reducer/wishlistReducer"

export default function Product({ productId, title, rating, price, imageUrl }) {
    const dispatch =useDispatch()
    const wishlistItems = useSelector((state)=>state.wishlistItems)
    const isInWishlist = wishlistItems.some(
    (item) => item.productId === productId
  );
  // console.log("list of item in wishlist", isInWishlist

    // Check if this product is already in the wishlist
    const handleWishlistClick = ()=>{
      if(isInWishlist){
        dispatch(removeWishListItem(productId))
    
      }else{
         // If not in wishlist → add
        dispatch(addWishListItem({ productId, title, rating, price, imageUrl }))
       
         
      }
      
    }
    
  return (
    <div className="product">
      <div>
        {/* Toggle between filled and outline heart */}
        {isInWishlist ? (
          <FaHeart
            onClick={handleWishlistClick}
            className="card-heart-icon"
            style={{ color: "red", cursor: "pointer" }}
          />
        ) : (
          <FaRegHeart
            onClick={handleWishlistClick}
            className="card-heart-icon"
            style={{ color: "gray", cursor: "pointer" }}
          />
        )}
      </div>
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button onClick={()=>dispatch(addCartItem({productId, title, rating, price, imageUrl}))}>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  )
}