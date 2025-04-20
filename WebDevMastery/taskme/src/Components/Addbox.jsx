import React, { useState , useEffect } from "react";

function Addbox({ setTaskList , taskList, id, setId}) {

    // we taking the title and description from the user input
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
  // create a method to add the title and description that store in above state to get again store into main taskList
  const SubmitHandler = (e)=>{
    e.preventDefault()
    // console.log(title, description)
    // calling the updateById
    if(id){
        updateById(id)
        setId('')
    }else{const obj = {
        id: Math.random(),
        title,
        description
    }
    setTaskList([...taskList,obj])

}
    // now we have to clean the to input boxes
    setTitle('')
    setDescription('')


  }


//   edit functionality: we updating the title and description value in the input box
  useEffect(() => {
    if(id){
        const updatedData = taskList.filter((data)=>data.id === id)
        console.log("this",updatedData)

        setTitle(updatedData[0].title)
        setDescription(updatedData[0].description)
    }
  }, [id])
  

//   here we updates the changes to same id were we editing
    const updateById = (id)=> {
        // create the obj were we storing the updated edited values
        const obj = {
            title,description
        }

        // here we mapping the id with the data previously present in the taskList
        setTaskList((prevData)=>
                prevData.map((taskList)=>taskList.id ===id ? {...taskList,...obj} : taskList))

    }


  return (
    <>
    <form onSubmit={SubmitHandler}>
      <div className="container">
        <h1 className="logo">TaskMe</h1>
        
          <div className="box-container">
            <input
              type="text"
              placeholder="Title"
              className="title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
             
            />

            <input
              type="text"
              placeholder="Description"
              className="desc"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />
            {
                id ? <button className="btn-add">Edit</button> : <button className="btn-add">Add</button>
            }
            {/* <button className="btn-add">Add</button> */}
          </div>
      </div>
    </form>
    </>
  );
}

export default Addbox;
