export const WISHLIST_ADD_ITEM = 'wishList/addItem'
export const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'


// Action Creators
export function addWishListItem(productData) {
  // console.log("add wish", productData)
  return { type: WISHLIST_ADD_ITEM, payload: productData  }
}
export function removeWishListItem(productId) {
  console.log("remove",productId)
  return { type: WISHLIST_REMOVE_ITEM, payload: { productId :productId } }  
}

export default function wishlistReducer(state = [], action) {
  switch (action.type) {
  
    case WISHLIST_ADD_ITEM:{
       // Check if item already exists in wishlist
      const existingItem = state.find((wishListItem) => wishListItem.productId === action.payload.productId)
      if(existingItem){
        return state // Return current state without changes
      }else{
        // If item doesn't exist, add it to wishlist
        return [...state, action.payload]
      }
    }

    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (wishListItem) => wishListItem.productId !== action.payload.productId
      )
    default:
      return state
  }
}