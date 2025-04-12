import React from 'react'

export default function Details(props) {
  return (
    <div className='container-fluid'>
      <div className='col-md-5 m-auto'>
        <div className='mt-3'>
          <div className='card text-left'>
            <div className='card-body'>
              <form onSubmit={props.submit}>
                <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' className='form-control' id='name' placeholder='Enter your name' autoComplete='off'required/>
                  </div>
                  <br/>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control' id='email' placeholder='Enter your email' autoComplete='off'required/>
                  </div>
                  <br/>
                  <button type='submit' name='submit' className='btn btn-primary' >Next</button>
              </form>
              <center>
                <span className='badge badge-dark'>1</span>
                <span className='badge badge-pill disabled'>2</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

