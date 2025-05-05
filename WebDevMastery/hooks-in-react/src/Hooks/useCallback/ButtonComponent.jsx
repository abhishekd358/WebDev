import React from 'react'


// -=----------------------------below code for without useCallback Understanding
// const ButtonComponent = ({passMethod}) => {
//   return (
//     <div>

//       {/* this button going to use the method i.e HandelCount from the Index C0mponent and change the value of the count state */}
//       <button onClick={passMethod}>ButtonComponent</button>
//     </div>
//   )
// }



// ======================== this below code when you using useCallback

  
  const ButtonComponent = React.memo(({passMethod}) => {
    return (
      <div>
        <button onClick={passMethod}>ButtonComponent</button>
      </div>
    )
  });
  


  export default ButtonComponent