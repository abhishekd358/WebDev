import React, { useState } from "react";
import Addbox from "./Components/Addbox";
import TableBox from "./Components/TableBox";

function App() {
  // data
  const [taskList, setTaskList] = useState([]);


// METHOD 1:
  // creating method for deleting : we use splice
  // const deleteHandler = (index) =>{
  //   // creating a copy of taskList state
  //   const copyOfTaskList = [...taskList]
  //   // here we splice
  //   copyOfTaskList.splice(index, 1)
  //   // here we setting up
  //   setTaskList(copyOfTaskList)
    
  // }


// METHOD 2:
    // using the filter method we doing update
    const deleteHandler = (id) => {
      const updatedTasks = taskList.filter((task) => task.id !== id);
      setTaskList(updatedTasks);
    };




    // edit button logic : we create a state to record the id
    const [id , setId] = useState('')
    // first we capture the id 
    // then if id is present in taskList we change the title and description using the setTitle  and setDescription method.
  
  

  return (
    <>
      <Addbox taskList={taskList} setTaskList={setTaskList} id={id} setId={setId}/>
      <TableBox taskList={taskList} setTaskList={setTaskList}  deleteHandler={deleteHandler} setId={setId}/>
    </>
  );
}

export default App;
