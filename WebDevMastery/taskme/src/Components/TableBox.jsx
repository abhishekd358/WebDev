import React from 'react'

function TableBox({taskList, deleteHandler , setId }) {
  console.log(taskList)
  return (
    <>
        <table>
            <thead>
                <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {taskList.map((d)=>(<tr key={d.id}>
                    <td>{d.title}</td>
                    <td>{d.description}</td>
                    <td><button className='btn-edit' onClick={()=>setId(d.id)}>Edit</button></td>
                    <td><button className='btn-delete' onClick={()=>deleteHandler(d.id)}>Delete</button></td>
                  </tr>))}
            </tbody>
        </table>
        
        
    </>
  )
}

export default TableBox