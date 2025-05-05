import React, { useId } from 'react'




//  useId use to generate a dyanmic unique id for table , input label 
const IndexId = () => {
    const nameId = useId();
    const emailId = useId();
    const ageId = useId();

  return (
    <div>

        <label htmlFor={nameId} >Name: </label>
        <input type="text"  id={nameId} placeholder='enter name'/>

        <label htmlFor={emailId} >Email: </label>
        <input type="text"  id={emailId} placeholder='@email'/>

        <label htmlFor={ageId} >Age: </label>
        <input type="text"  id={ageId} placeholder=''/>

    </div>
  )
}

export default IndexId