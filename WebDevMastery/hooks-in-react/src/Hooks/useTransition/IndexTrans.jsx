import React, { useState, useTransition } from 'react'

const IndexTrans = () => {
    const [search, setSearch] = useState("")

    // use Transition Hook

    const [isPending, startTransition] = useTransition();

    // here we create a method which is slow process : like searching text in the huge list
    const HandleSearch = (e) =>{
        startTransition(()=>setSearch(e.target.value));
        console.log(search)
    } 


  return (
    <div>
        <input type="text" value={search} onChange={HandleSearch}/>
    </div>
  )
}

export default IndexTrans