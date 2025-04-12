import React from 'react'

export default function Question(props) {
  return (
    <div className='container-fluid'>
        <div className='col-md-5 m-auto'>
            <div className='mt-3'>
                <div className='card text-left'>
                    <div className='card-body'>
                        <form onSubmit={props.question}>
                            <div className='form-group'>
                                <label htmlFor='form-group'><br/>3. What are you currently doing?</label>
                                <br/>
                                <input type='radio' name='q1' id ='teacher' value="Teacher" autoComplete='off'/>
                                <label htmlFor='teacher'>Teaching</label>

                                <input type='radio' id ='student' name='q1' value="Student" autoComplete='off'/>
                                <label htmlFor='student'>Student</label>

                                <input type='radio' id ='programmer' name='q1' value="Programmer" autoComplete='off'/>
                                <label htmlFor='programmer'>Programmer</label>

                                <input type='radio' id ='other' name='q1' value="Other" autoComplete='off'/>
                                <label htmlFor='other'>Other</label>
                                <br/>

                                <input type='text' className='form-control' autoComplete='off' placeholder='Type here if you not listed'/>
                            </div>



                            <div className='form-group'>
                                <label htmlFor =''><br/>4. Please rate our course.</label>
                                <br/>
                                <input type='radio' name='q2' id ='poor' value="Poor" autoComplete='off'/>
                                <label htmlFor='poor'>Poor</label>
                                <input type='radio' id ='good' name='q2' value="Good" autoComplete='off'/>
                                <label htmlFor='good'>Good</label>
                                <input type='radio' id ='excellent' name='q2' value="Excellent" autoComplete='off'/>
                                <label htmlFor='excellent'>Excellent</label>
                                </div>

    

                            <div className='form-group'>
                                <label htmlFor=''><br/>5. Write Your review here</label>
                                <textarea className='form-control' name='q3'/>            
                            </div>

                            <br/>
                            <button type='submit' className='btn btn-primary'>Save</button>
                        </form>
                       <center>
                        <span className='badge badge-pill disabled'>1</span>
                        <span className='badge badge-pill badge-primary'>2</span>
                       </center>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
